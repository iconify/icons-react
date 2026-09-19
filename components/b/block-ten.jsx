import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d70u10bbk.css';
import '../../css/d/dov8vg2gk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d70u10bbk"/><path class="dov8vg2gk"/></g>`,
		"fallback": "icon-park-outline:block-ten",
	});
}

export default Component;
