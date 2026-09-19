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
		"content": `<path class="mro34mbsj"/>`,
		"fallback": "fa:angle-double-left",
	});
}

export default Component;
