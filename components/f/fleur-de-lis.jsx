import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tecpr0e2s.css';
import '../../css/c/cd4da036i.css';
import '../../css/t/tffqy754l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tecpr0e2s"/><path class="cd4da036i"/><path class="tffqy754l"/></g>`,
		"fallback": "fluent-emoji-flat:fleur-de-lis",
	});
}

export default Component;
