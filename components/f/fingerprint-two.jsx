import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sif-44brx.css';
import '../../css/c/csnl12zgv.css';
import '../../css/b/b_lz6vbnj.css';
import '../../css/u/ul8r6kblf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="sif-44brx"/><path class="csnl12zgv"/><path class="b_lz6vbnj"/><path class="ul8r6kblf"/></g>`,
		"fallback": "icon-park:fingerprint-two",
	});
}

export default Component;
