import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/f/fihmumb1d.css';
import '../../css/n/ndjw48szj.css';
import '../../css/u/u30edub9o.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="fihmumb1d"/><path class="ndjw48szj"/><path class="u30edub9o wm-shine"/><path class="ug799plhe wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-diff",
	});
}

export default Component;
