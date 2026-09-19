import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/crirhg0qe.css';
import '../../css/c/ccom-1_zn.css';
import '../../css/o/ofgf3ebhn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="crirhg0qe"/><circle transform="matrix(-1 0 0 1 33.5 24.5)" class="ccom-1_zn"/><path class="ofgf3ebhn"/></g>`,
		"fallback": "icon-park-outline:glasses-one",
	});
}

export default Component;
