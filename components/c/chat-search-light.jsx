import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l3i4eqbnf.css';
import '../../css/k/k59f9ebtr.css';
import '../../css/n/nmc1rlb0c.css';
import '../../css/m/mw2wcobik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="l3i4eqbnf"/><path class="k59f9ebtr"/><circle class="nmc1rlb0c"/><path class="mw2wcobik"/></g>`,
		"fallback": "lets-icons:chat-search-light",
	});
}

export default Component;
