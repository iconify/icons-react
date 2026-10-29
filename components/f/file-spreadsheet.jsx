import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/f/fd5_dnbey.css';
import '../../css/j/jjadg4b5m.css';
import '../../css/f/fihmumb1d.css';
import '../../css/v/vf870b-qu.css';
import '../../css/e/epf3gvb-a.css';
import '../../css/e/ecbm2k1-l.css';
import '../../css/u/ug799plhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="fd5_dnbey wm-shadow"/><path class="jjadg4b5m"/><path class="fihmumb1d"/><path class="vf870b-qu"/><path class="epf3gvb-a"/><path class="ecbm2k1-l wm-shine"/><path class="ug799plhe wm-deco"/></g>`,
		"fallback": "withicons-sticker:file-spreadsheet",
	});
}

export default Component;
