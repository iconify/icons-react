import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikhq3zksb.css';
import '../../css/q/qhcv_f3zo.css';
import '../../css/n/nk66vubau.css';
import '../../css/c/c6p64f2bo.css';
import '../../css/g/g65477bmz.css';
import '../../css/w/waqn2q7zx.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikhq3zksb"/><path class="qhcv_f3zo"/><path class="nk66vubau"/><path class="c6p64f2bo"/><path class="g65477bmz"/><path class="waqn2q7zx"/>`,
		"fallback": "devicon:google-wordmark",
	});
}

export default Component;
