import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ne263d1fr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ne263d1fr"/>`,
		"fallback": "si-glyph:faucet",
	});
}

export default Component;
