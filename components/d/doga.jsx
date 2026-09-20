import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy3vbebii.css';
import '../../css/p/pshtltbvx.css';
import '../../css/y/yax9-yihq.css';
import '../../css/u/u4n-q8ifu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iy3vbebii"/><path class="pshtltbvx"/><path clip-rule="evenodd" class="yax9-yihq"/><path class="u4n-q8ifu"/>`,
		"fallback": "token:doga",
	});
}

export default Component;
