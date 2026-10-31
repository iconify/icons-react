import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nvxlotb4y.css';
import '../../css/o/ovowzzx-x.css';
import '../../css/n/nf2tyac7k.css';
import '../../css/q/qy8q0slgn.css';
import '../../css/s/ssln_mbnv.css';
import '../../css/k/k39rac9jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nvxlotb4y wm-shadow"/><path class="ovowzzx-x"/><path class="nf2tyac7k"/><path class="qy8q0slgn"/><path class="ssln_mbnv"/><path class="k39rac9jx"/></g>`,
		"fallback": "withicons-retro:dog",
	});
}

export default Component;
