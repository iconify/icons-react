import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hrdn3vu_n.css';
import '../../css/k/k2eweukar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="hrdn3vu_n"/><path class="k2eweukar"/></g>`,
		"fallback": "icon-park-outline:chicken-zodiac",
	});
}

export default Component;
