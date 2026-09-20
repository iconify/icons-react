import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cq7vavbxw.css';
import '../../css/t/tx7qtic5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cq7vavbxw"/><path class="tx7qtic5g"/></g>`,
		"fallback": "majesticons:chats-2-line",
	});
}

export default Component;
