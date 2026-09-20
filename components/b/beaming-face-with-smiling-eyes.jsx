import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az7hstbmu.css';
import '../../css/x/xtagy0bqr.css';
import '../../css/s/swt8oib6e.css';
import '../../css/z/z04drlb1l.css';
import '../../css/s/sgor8wbzm.css';
import '../../css/c/cu8rrjbgf.css';
import '../../css/i/i97z-ibpg.css';
import '../../css/j/jii6c3x9u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="az7hstbmu"/><path class="xtagy0bqr"/><path class="swt8oib6e"/><g class="z04drlb1l"><circle class="sgor8wbzm"/><path class="cu8rrjbgf"/><path class="i97z-ibpg"/><path class="jii6c3x9u"/></g>`,
		"fallback": "openmoji:beaming-face-with-smiling-eyes",
	});
}

export default Component;
