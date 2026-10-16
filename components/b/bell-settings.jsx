import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vuryjg-7f.css';
import '../../css/i/if6l61ygi.css';
import '../../css/l/leq5oj53s.css';
import '../../css/r/rc4a8e0yb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vuryjg-7f"/><path class="if6l61ygi"/><circle transform="rotate(-90 18.05 5.4)" class="leq5oj53s"/><path class="rc4a8e0yb"/></g>`,
		"fallback": "andrsrxn:bell-settings",
	});
}

export default Component;
