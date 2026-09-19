import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_bbn7bzj.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_bbn7bzj"/>`,
		"fallback": "fa-brands:innosoft",
	});
}

export default Component;
