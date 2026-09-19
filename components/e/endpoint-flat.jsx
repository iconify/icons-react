import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/w/w2fmp4bnm.css';
import '../../css/r/rvsrqeymq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="w2fmp4bnm"/><circle class="rvsrqeymq"/></g>`,
		"fallback": "icon-park-outline:endpoint-flat",
	});
}

export default Component;
