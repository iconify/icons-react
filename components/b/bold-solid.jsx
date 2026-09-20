import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5-6mmbvw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m5-6mmbvw"/>`,
		"fallback": "teenyicons:bold-solid",
	});
}

export default Component;
