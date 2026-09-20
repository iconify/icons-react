import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsgpay9lb.css';
import '../../css/n/ntveefwhq.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/cd7zj2mlo.css';
import '../../css/b/b0iywkbyj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsgpay9lb"/><path class="ntveefwhq"/><circle class="huuajhmrh"/><path class="cd7zj2mlo"/><path class="b0iywkbyj"/>`,
		"fallback": "openmoji:angry-face-with-horns",
	});
}

export default Component;
