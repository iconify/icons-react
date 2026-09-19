import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/i/i74ahcw-i.css';
import '../../css/c/cox-zxd7x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="i74ahcw-i"/><path class="cox-zxd7x"/></g>`,
		"fallback": "icon-park-outline:clothes-suit",
	});
}

export default Component;
