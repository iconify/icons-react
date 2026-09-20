import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zfv5occ_n.css';
import '../../css/y/yq7kijbfi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zfv5occ_n"/><path class="yq7kijbfi"/></g>`,
		"fallback": "reicon:calendar-search-filled",
	});
}

export default Component;
