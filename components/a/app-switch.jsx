import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pin4pqb9k.css';
import '../../css/z/z_n1vqbki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pin4pqb9k"/><path class="z_n1vqbki"/></g>`,
		"fallback": "icon-park-solid:app-switch",
	});
}

export default Component;
