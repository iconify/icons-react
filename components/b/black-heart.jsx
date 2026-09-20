import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc39e3tng.css';
import '../../css/f/fq4_qkb3m.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc39e3tng"/><path class="fq4_qkb3m"/>`,
		"fallback": "openmoji:black-heart",
	});
}

export default Component;
