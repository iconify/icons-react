import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sphwdtbjb.css';
import '../../css/v/vdmd9jb1y.css';
import '../../css/q/q_qn7fbxw.css';
import '../../css/x/x8m8gyb6u.css';

const viewBox = {"width":301,"height":219};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sphwdtbjb"/><path class="vdmd9jb1y"/><path class="q_qn7fbxw"/><path class="x8m8gyb6u"/></g>`,
		"fallback": "cif:il",
	});
}

export default Component;
