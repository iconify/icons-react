import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/h29u00bfi.css';
import '../../css/i/i7a6vwmyp.css';
import '../../css/y/yaej89vba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="h29u00bfi"/><path class="i7a6vwmyp"/><path class="yaej89vba"/></g>`,
		"fallback": "streamline-sharp-color:allergens-fish",
	});
}

export default Component;
