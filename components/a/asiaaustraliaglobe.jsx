import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4dm09b_v.css';
import '../../css/s/scg0arb9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4dm09b_v"/><path class="scg0arb9m"/>`,
		"fallback": "fxemoji:asiaaustraliaglobe",
	});
}

export default Component;
