import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufie9ebgy.css';
import '../../css/i/idkm_n_ig.css';
import '../../css/v/vnf09r-ls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufie9ebgy"><path class="idkm_n_ig"/><path class="vnf09r-ls"/></g>`,
		"fallback": "iconoir:flower",
	});
}

export default Component;
