import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cq7vavbxw.css';
import '../../css/c/cag512bei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cq7vavbxw"/><path class="cag512bei"/></g>`,
		"fallback": "majesticons:chats-2",
	});
}

export default Component;
