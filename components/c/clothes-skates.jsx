import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x6knv9d5h.css';
import '../../css/i/i0__1l-ex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="x6knv9d5h"/><circle class="i0__1l-ex"/></g>`,
		"fallback": "icon-park-solid:clothes-skates",
	});
}

export default Component;
