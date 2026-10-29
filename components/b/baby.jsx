import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c5n36ubcc.css';
import '../../css/l/ldovgsxiw.css';
import '../../css/k/k_t8b8b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c5n36ubcc"/><path class="ldovgsxiw"/><path class="k_t8b8b3u"/></g>`,
		"fallback": "withicons-bauhaus:baby",
	});
}

export default Component;
