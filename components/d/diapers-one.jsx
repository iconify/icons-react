import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jx4-d-vaj.css';
import '../../css/b/bs-433_bs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jx4-d-vaj"/><path class="bs-433_bs"/></g>`,
		"fallback": "icon-park-outline:diapers-one",
	});
}

export default Component;
