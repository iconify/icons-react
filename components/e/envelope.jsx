import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/x9o68l7ys.css';
import '../../css/l/lq5uxcqqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="x9o68l7ys"/><path class="lq5uxcqqs"/></g>`,
		"fallback": "icon-park-outline:envelope",
	});
}

export default Component;
