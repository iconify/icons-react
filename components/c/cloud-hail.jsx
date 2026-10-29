import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jpprgfbwi.css';
import '../../css/f/fe9sjkqgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jpprgfbwi wm-k"/><path class="fe9sjkqgu wm-a"/></g>`,
		"fallback": "withicons-bauhaus:cloud-hail",
	});
}

export default Component;
