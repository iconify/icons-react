import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkse_3btc.css';
import '../../css/m/mt2z4gbcg.css';
import '../../css/f/fb4sl08kb.css';
import '../../css/s/spenc4h9o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bkse_3btc"/><path clip-rule="evenodd" class="mt2z4gbcg"/><path class="fb4sl08kb"/><path clip-rule="evenodd" class="spenc4h9o"/></g>`,
		"fallback": "glyphs:arrow-solid-line-end-outline",
	});
}

export default Component;
