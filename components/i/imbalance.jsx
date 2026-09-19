import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/d08qanr9p.css';
import '../../css/i/iiq37-b1d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="d08qanr9p"/><path clip-rule="evenodd" class="iiq37-b1d"/></g>`,
		"fallback": "icon-park-outline:imbalance",
	});
}

export default Component;
