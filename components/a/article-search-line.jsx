import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wlgwclbnd.css';
import '../../css/u/u8ocfbbgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wlgwclbnd"/><path class="u8ocfbbgm"/></g>`,
		"fallback": "majesticons:article-search-line",
	});
}

export default Component;
