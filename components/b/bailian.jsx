import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nrc9ddj4j.css';
import '../../css/a/ae4r50ypt.css';
import '../../css/f/f-8z3ym4f.css';
import '../../css/c/cpn6zhbur.css';
import '../../css/m/meupreb8q.css';
import '../../css/o/ok1qu8bzh.css';
import '../../css/j/jab17sb5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nrc9ddj4j"/><path class="ae4r50ypt"/><path class="f-8z3ym4f"/><path class="cpn6zhbur"/><path class="meupreb8q"/><path class="ok1qu8bzh"/><path class="jab17sb5f"/></g>`,
		"fallback": "thesvg:bailian",
	});
}

export default Component;
