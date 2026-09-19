import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/x/xc4c9gx0s.css';
import '../../css/j/jgkbj7bxb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="xc4c9gx0s"/><path class="jgkbj7bxb"/></g>`,
		"fallback": "icon-park-outline:download",
	});
}

export default Component;
