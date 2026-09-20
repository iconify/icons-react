import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0eqx9bek.css';
import '../../css/k/kizwdlknt.css';
import '../../css/h/hailpgudm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s6wo44j_t.css';
import '../../css/y/y2uwfub_r.css';
import '../../css/e/eqnsdymgj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="x0eqx9bek"/><path class="kizwdlknt"/><path class="hailpgudm"/><g class="jn8qy4bru"><circle class="s6wo44j_t"/><path class="y2uwfub_r"/><path class="eqnsdymgj"/></g>`,
		"fallback": "openmoji:baseball",
	});
}

export default Component;
