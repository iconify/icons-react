import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vpmy-rv_x.css';
import '../../css/j/jow_9kb1z.css';
import '../../css/j/jp4mjqm_n.css';
import '../../css/f/fhlgb8bsv.css';
import '../../css/v/vq7rj2bdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vpmy-rv_x"/><path class="jow_9kb1z"/><path class="jp4mjqm_n"/><path class="fhlgb8bsv"/><path class="vq7rj2bdt"/></g>`,
		"fallback": "streamline-memes:all-the-things-meme",
	});
}

export default Component;
