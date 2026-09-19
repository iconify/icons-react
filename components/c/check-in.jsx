import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/m/mkd5n7taf.css';
import '../../css/y/y_e_yzf5i.css';
import '../../css/u/u4-tff-3z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="mkd5n7taf"/><path class="y_e_yzf5i"/><path class="u4-tff-3z"/></g>`,
		"fallback": "icon-park-outline:check-in",
	});
}

export default Component;
