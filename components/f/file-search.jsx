import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/r/rl7ngkbjg.css';
import '../../css/d/dgheqoxjw.css';
import '../../css/a/a-z1uqbnv.css';
import '../../css/k/kcmb83bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="rl7ngkbjg"/><path class="dgheqoxjw"/><path class="a-z1uqbnv wm-shine"/><path class="kcmb83bpq wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-search",
	});
}

export default Component;
