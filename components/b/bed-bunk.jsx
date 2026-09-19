import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xqkru5bld.css';
import '../../css/d/dcuv42beu.css';
import '../../css/u/u0i6-8b9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xqkru5bld"/><path class="dcuv42beu"/><path class="u0i6-8b9w"/></g>`,
		"fallback": "hugeicons:bed-bunk",
	});
}

export default Component;
