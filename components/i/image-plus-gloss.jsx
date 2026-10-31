import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yqp6u-brq.css';
import '../../css/d/dhdduxo9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k yqp6u-brq"/><path class="dhdduxo9i wm-s"/></g>`,
		"fallback": "withicons:image-plus-gloss",
	});
}

export default Component;
