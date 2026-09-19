import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pk6r-mbyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pk6r-mbyj"/>`,
		"fallback": "cbi:bulb-group-filament-candle",
	});
}

export default Component;
