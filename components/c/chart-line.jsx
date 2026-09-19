import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/y/yekuccbwe.css';
import '../../css/b/bkgt1akyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="yekuccbwe"/><path class="bkgt1akyr"/></g>`,
		"fallback": "icon-park-outline:chart-line",
	});
}

export default Component;
