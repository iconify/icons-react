import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzphs4bvs.css';
import '../../css/b/b-rxk4bpv.css';
import '../../css/p/prjehr37f.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fcu35bc_a.css';
import '../../css/z/zaqnsm2le.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzphs4bvs"/><path class="b-rxk4bpv"/><path class="prjehr37f"/><g class="jn8qy4bru"><path class="fcu35bc_a"/><path class="zaqnsm2le"/></g>`,
		"fallback": "openmoji:horse",
	});
}

export default Component;
