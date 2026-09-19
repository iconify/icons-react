import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zqe53bcgg.css';
import '../../css/n/nuqn2cpjz.css';
import '../../css/v/v9c7lmbfs.css';
import '../../css/j/jjgp8umbu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zqe53bcgg"/><path class="nuqn2cpjz"/><path class="v9c7lmbfs"/><path class="jjgp8umbu"/></g>`,
		"fallback": "fluent-emoji-high-contrast:clown-face",
	});
}

export default Component;
