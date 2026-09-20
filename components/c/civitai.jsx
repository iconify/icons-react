import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/p08lvibun.css';
import '../../css/s/sqm7h0bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="p08lvibun"/><path class="sqm7h0bjt"/></g>`,
		"fallback": "thesvg:civitai",
	});
}

export default Component;
