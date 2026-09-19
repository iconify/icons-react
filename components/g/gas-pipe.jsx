import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/seuormdxt.css';
import '../../css/b/br8th3blo.css';
import '../../css/b/buhh-db0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="seuormdxt"/><path class="br8th3blo"/><path class="buhh-db0h"/></g>`,
		"fallback": "hugeicons:gas-pipe",
	});
}

export default Component;
