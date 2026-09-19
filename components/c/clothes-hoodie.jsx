import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/j6z07byko.css';
import '../../css/d/d2oq32bzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="j6z07byko"/><path class="d2oq32bzp"/></g>`,
		"fallback": "icon-park-outline:clothes-hoodie",
	});
}

export default Component;
