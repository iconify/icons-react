import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ixnuzvpff.css';
import '../../css/k/kl9k3o0sf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ixnuzvpff"/><path class="kl9k3o0sf"/></g>`,
		"fallback": "hugeicons:gold-ingots",
	});
}

export default Component;
