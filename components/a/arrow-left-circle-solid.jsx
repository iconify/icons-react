import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_byhbb7v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u_byhbb7v"/>`,
		"fallback": "teenyicons:arrow-left-circle-solid",
	});
}

export default Component;
