import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/oikz_hy6r.css';
import '../../css/l/ly5956p2q.css';
import '../../css/t/tz4ek_gwc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="oikz_hy6r"/><circle class="ly5956p2q"/><path class="tz4ek_gwc"/></g>`,
		"fallback": "icon-park-outline:endpoint-round",
	});
}

export default Component;
