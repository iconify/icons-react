import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/r/rl7ngkbjg.css';
import '../../css/i/i5muwbcga.css';
import '../../css/m/mqgbqy9my.css';
import '../../css/k/kcmb83bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="rl7ngkbjg"/><path class="i5muwbcga"/><path class="mqgbqy9my wm-shine"/><path class="kcmb83bpq wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-question",
	});
}

export default Component;
