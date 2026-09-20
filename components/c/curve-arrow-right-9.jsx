import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/b/besea9ybt.css';
import '../../css/i/imxus4b6x.css';
import '../../css/i/i47_jpt1d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="besea9ybt"/><path class="imxus4b6x"/><path class="i47_jpt1d"/></g>`,
		"fallback": "marketeq:curve-arrow-right-9",
	});
}

export default Component;
