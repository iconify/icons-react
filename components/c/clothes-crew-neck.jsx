import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/fk_cjqgyo.css';
import '../../css/f/fr7ysqbpn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="fk_cjqgyo"/><path class="fr7ysqbpn"/></g>`,
		"fallback": "icon-park-outline:clothes-crew-neck",
	});
}

export default Component;
