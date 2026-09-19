import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rg-6psbxi.css';
import '../../css/q/q9twg8bgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="rg-6psbxi"/><path class="q9twg8bgx"/></g>`,
		"fallback": "icon-park-outline:building-four",
	});
}

export default Component;
