import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vto44fblp.css';
import '../../css/c/c4yt10bhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vto44fblp"/><path class="c4yt10bhf"/></g>`,
		"fallback": "hugeicons:file-bookmark",
	});
}

export default Component;
