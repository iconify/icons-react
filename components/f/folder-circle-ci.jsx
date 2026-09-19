import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q58hkcbgc.css';
import '../../css/n/nex3mxn9k.css';
import '../../css/a/aeo40rpjp.css';
import '../../css/r/rzh9w33nj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="q58hkcbgc"/><g class="nex3mxn9k"><path class="aeo40rpjp"/><circle class="rzh9w33nj"/></g></g>`,
		"fallback": "catppuccin:folder-circle-ci",
	});
}

export default Component;
