import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/m/m5ozzbnit.css';
import '../../css/i/imstvac3c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="m5ozzbnit"/><path class="imstvac3c"/></g>`,
		"fallback": "marketeq:contrass-alt-3",
	});
}

export default Component;
