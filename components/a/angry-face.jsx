import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c479rxbrg.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/cd7zj2mlo.css';
import '../../css/u/uo37p1btr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c479rxbrg"/><circle class="huuajhmrh"/><path class="cd7zj2mlo"/><path class="uo37p1btr"/>`,
		"fallback": "openmoji:angry-face",
	});
}

export default Component;
