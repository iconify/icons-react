import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcyedxxtq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/pyhwdlbaj.css';
import '../../css/f/fk9ervbqx.css';
import '../../css/c/cfi22q2gr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcyedxxtq"/><g class="jn8qy4bru"><path class="pyhwdlbaj"/><path class="fk9ervbqx"/><path class="cfi22q2gr"/></g>`,
		"fallback": "openmoji:fingerprint",
	});
}

export default Component;
