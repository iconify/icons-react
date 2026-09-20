import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ijtrgg6nr.css';
import '../../css/t/t6ait0bdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ijtrgg6nr"/><path class="t6ait0bdb"/></g>`,
		"fallback": "reicon:arrows-up-filled",
	});
}

export default Component;
