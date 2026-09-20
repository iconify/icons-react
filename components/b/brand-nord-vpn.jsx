import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/li9d773zu.css';
import '../../css/u/u1ak9mw8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="li9d773zu"/><path class="u1ak9mw8h"/></g>`,
		"fallback": "tabler:brand-nord-vpn",
	});
}

export default Component;
