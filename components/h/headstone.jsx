import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iq5e1h6ad.css';
import '../../css/d/ds7dl9bhv.css';
import '../../css/m/m5m3ywbwl.css';
import '../../css/t/turu6r4ex.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iq5e1h6ad"/><path class="ds7dl9bhv"/><path class="m5m3ywbwl"/><path class="turu6r4ex"/></g>`,
		"fallback": "fluent-emoji-flat:headstone",
	});
}

export default Component;
