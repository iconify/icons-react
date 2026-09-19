import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/no-bto4wu.css';
import '../../css/b/brooorbhm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="no-bto4wu"/><path class="brooorbhm"/></g>`,
		"fallback": "icon-park-outline:feelgood-one",
	});
}

export default Component;
