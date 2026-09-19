import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wrewpfm7g.css';
import '../../css/k/kbhnc06ui.css';
import '../../css/h/hzrr-0ilm.css';
import '../../css/c/c31g3-byf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wrewpfm7g"/><path class="kbhnc06ui"/><path class="hzrr-0ilm"/><path class="c31g3-byf"/></g>`,
		"fallback": "catppuccin:css-map",
	});
}

export default Component;
