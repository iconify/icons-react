import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xqm10ubez.css';
import '../../css/f/fpnj5kbqo.css';
import '../../css/d/dec_aybzw.css';
import '../../css/e/e73kn4beu.css';
import '../../css/e/ezzv083_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="xqm10ubez"/><path class="fpnj5kbqo wm-k"/><path class="dec_aybzw wm-k"/><path class="e73kn4beu wm-a"/><path class="ezzv083_y wm-s"/></g>`,
		"fallback": "withicons:file-cog-sketch",
	});
}

export default Component;
