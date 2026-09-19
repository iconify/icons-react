import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rbkx84bkk.css';
import '../../css/j/jbwl3wbjd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="rbkx84bkk"/><path class="jbwl3wbjd"/></g>`,
		"fallback": "icon-park-outline:code-computer",
	});
}

export default Component;
