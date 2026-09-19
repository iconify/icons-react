import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q58hkcbgc.css';
import '../../css/c/cojd63dkm.css';
import '../../css/t/twkrzm7ai.css';
import '../../css/f/fk33onbpt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="q58hkcbgc"/><g class="cojd63dkm"><path class="twkrzm7ai"/><path class="fk33onbpt"/></g></g>`,
		"fallback": "catppuccin:folder-aws",
	});
}

export default Component;
