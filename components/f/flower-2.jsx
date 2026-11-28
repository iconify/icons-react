import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z66vey9kv.css';
import '../../css/p/pm5659b_e.css';
import '../../css/b/bx-lz44ca.css';
import '../../css/l/ld8o6wf0n.css';
import '../../css/n/nn_qfufcy.css';
import '../../css/q/qvuivg1tn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z66vey9kv"/><path class="pm5659b_e"/><path class="bx-lz44ca"/><path class="ld8o6wf0n"/><path class="nn_qfufcy"/><path class="qvuivg1tn"/></g>`,
		"fallback": "iconaut:flower-2",
	});
}

export default Component;
