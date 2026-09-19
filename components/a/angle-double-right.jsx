import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mro34mbsj.css';

const viewBox = {"width":992,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(992 0) scale(-1 1)"><path class="mro34mbsj"/></g>`,
		"fallback": "fa:angle-double-right",
	});
}

export default Component;
