import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v96czrbjl.css';
import '../../css/h/htyshjb0q.css';
import '../../css/u/u97n1vb2x.css';
import '../../css/v/vqd3-fbzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v96czrbjl"/><path class="htyshjb0q"/><circle transform="rotate(18.176 10.698 9.814)" class="u97n1vb2x"/><path clip-rule="evenodd" class="vqd3-fbzt"/></g>`,
		"fallback": "streamline-memes:flork-in-love",
	});
}

export default Component;
