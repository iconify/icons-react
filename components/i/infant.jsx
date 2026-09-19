import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p5x0b0j1d.css';
import '../../css/r/r4f9anbfl.css';
import '../../css/y/y183xbbsw.css';
import '../../css/n/n891lmcsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p5x0b0j1d"/><path class="r4f9anbfl"/><path class="y183xbbsw"/><path class="n891lmcsl"/></g>`,
		"fallback": "hugeicons:infant",
	});
}

export default Component;
