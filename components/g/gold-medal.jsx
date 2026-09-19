import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/m66g3kb5k.css';
import '../../css/g/g00mx43ai.css';
import '../../css/i/ij785dbcr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="m66g3kb5k"/><path class="g00mx43ai"/><path class="ij785dbcr"/></g>`,
		"fallback": "icon-park-outline:gold-medal",
	});
}

export default Component;
