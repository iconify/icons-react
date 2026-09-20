import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_1fj88zt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p_1fj88zt"/>`,
		"fallback": "teenyicons:csv-solid",
	});
}

export default Component;
