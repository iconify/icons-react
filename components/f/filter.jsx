import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6qtlmope.css';
import '../../css/l/lu6o76i1k.css';
import '../../css/k/kg3xfqjig.css';
import '../../css/i/if8vgjbma.css';
import '../../css/v/vwrpoabhl.css';
import '../../css/n/ntakxzvpv.css';
import '../../css/o/olikuubcw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6qtlmope wm-shadow"/><path class="lu6o76i1k wm-k"/><path class="kg3xfqjig wm-k"/><path class="if8vgjbma wm-k"/><path class="vwrpoabhl wm-k"/><path class="ntakxzvpv wm-k"/><path class="olikuubcw wm-shine"/>`,
		"fallback": "withicons-pastel:filter",
	});
}

export default Component;
