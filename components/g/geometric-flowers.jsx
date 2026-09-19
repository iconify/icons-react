import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/lrtadt_mm.css';
import '../../css/p/pmmx72kkg.css';
import '../../css/y/yz9-03dhq.css';
import '../../css/r/ro40x6bjb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="lrtadt_mm"/><path class="pmmx72kkg"/><path class="yz9-03dhq"/><path class="ro40x6bjb"/></g>`,
		"fallback": "icon-park-outline:geometric-flowers",
	});
}

export default Component;
