import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpop_tbds.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpop_tbds"/>`,
		"fallback": "fa-solid:door-open",
	});
}

export default Component;
