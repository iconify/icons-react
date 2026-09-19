import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c-vzr4ndx.css';
import '../../css/u/u7-gei-md.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c-vzr4ndx"/><path class="u7-gei-md"/></g>`,
		"fallback": "icon-park-outline:fruiter",
	});
}

export default Component;
