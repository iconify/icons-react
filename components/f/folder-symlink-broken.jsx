import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u-sgqtbzk.css';
import '../../css/n/nc1hb6bcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u-sgqtbzk"/><path class="nc1hb6bcl"/></g>`,
		"fallback": "solar:folder-symlink-broken",
	});
}

export default Component;
