import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c5568ghva.css';
import '../../css/u/u4d5ulj-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c5568ghva"/><path class="u4d5ulj-m"/></g>`,
		"fallback": "icon-park-outline:corner-up-right",
	});
}

export default Component;
