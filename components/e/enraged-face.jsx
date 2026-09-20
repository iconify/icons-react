import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjcnvdb-r.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/cr8l1lart.css';
import '../../css/c/cd7zj2mlo.css';
import '../../css/b/bzf29r1ev.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjcnvdb-r"/><circle class="huuajhmrh"/><path class="cr8l1lart"/><path class="cd7zj2mlo"/><path class="bzf29r1ev"/>`,
		"fallback": "openmoji:enraged-face",
	});
}

export default Component;
