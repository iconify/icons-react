import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufpp1dblg.css';
import '../../css/f/fi8i2-gbz.css';
import '../../css/n/nsusglb8a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ufpp1dblg"/><rect class="fi8i2-gbz"/><circle transform="matrix(-1 0 0 1 24 24)" class="nsusglb8a"/></g>`,
		"fallback": "icon-park-outline:focus",
	});
}

export default Component;
