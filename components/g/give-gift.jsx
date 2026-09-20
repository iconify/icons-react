import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/faf5xj6kl.css';
import '../../css/f/f5tv_ebqr.css';
import '../../css/j/junp1tb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="faf5xj6kl"/><path class="f5tv_ebqr"/><path class="junp1tb6r"/></g>`,
		"fallback": "streamline-sharp-color:give-gift",
	});
}

export default Component;
