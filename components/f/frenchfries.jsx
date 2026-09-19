import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyv1xibtc.css';
import '../../css/t/tzkg51bww.css';
import '../../css/v/vur1unwrn.css';
import '../../css/i/irl_dzb7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyv1xibtc"/><path class="tzkg51bww"/><path class="vur1unwrn"/><path class="irl_dzb7t"/>`,
		"fallback": "fxemoji:frenchfries",
	});
}

export default Component;
