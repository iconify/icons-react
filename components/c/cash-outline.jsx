import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmr_-4ywv.css';
import '../../css/p/p2tzfnyio.css';
import '../../css/h/hb0uf1bvc.css';
import '../../css/i/i-p-10b-h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="matrix(-1 0 0 -1 512 416)" class="wmr_-4ywv"/><path class="p2tzfnyio"/><circle class="hb0uf1bvc"/><path class="i-p-10b-h"/>`,
		"fallback": "ion:cash-outline",
	});
}

export default Component;
