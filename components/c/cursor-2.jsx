import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/i/i98w_ya9j.css';
import '../../css/w/w3vfwmw_h.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="i98w_ya9j"/><path class="w3vfwmw_h"/></g>`,
		"fallback": "marketeq:cursor-2",
	});
}

export default Component;
