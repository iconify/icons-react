import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xd6fvhbqt.css';
import '../../css/d/dfm3c4zue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k xd6fvhbqt"/><path class="dfm3c4zue wm-s"/></g>`,
		"fallback": "withicons:crystal-ball-gloss",
	});
}

export default Component;
