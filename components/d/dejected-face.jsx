import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s35tz368t.css';
import '../../css/h/huuajhmrh.css';
import '../../css/p/p4xjdfe4u.css';
import '../../css/e/eqgsytbpf.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s35tz368t"/><circle class="huuajhmrh"/><path class="p4xjdfe4u"/><path class="eqgsytbpf"/>`,
		"fallback": "openmoji:dejected-face",
	});
}

export default Component;
