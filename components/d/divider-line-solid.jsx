import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1p9s6bdk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o1p9s6bdk"/>`,
		"fallback": "teenyicons:divider-line-solid",
	});
}

export default Component;
