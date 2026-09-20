import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l155kb_ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l155kb_ad"/>`,
		"fallback": "mdi:chart-snakey-variant",
	});
}

export default Component;
