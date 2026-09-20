import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wb42c5btj.css';
import '../../css/f/fbip6cc2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wb42c5btj"/><path class="fbip6cc2s"/></g>`,
		"fallback": "streamline-ultimate:cash-payment-bill",
	});
}

export default Component;
