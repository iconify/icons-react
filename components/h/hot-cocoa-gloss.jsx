import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ae16oeuku.css';
import '../../css/q/q9k8obb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ae16oeuku wm-k"/><path class="q9k8obb9s wm-s"/></g>`,
		"fallback": "withicons:hot-cocoa-gloss",
	});
}

export default Component;
