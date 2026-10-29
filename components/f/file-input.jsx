import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vk4yonzaw.css';
import '../../css/p/p1kbumysc.css';
import '../../css/o/ozl2zbbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vk4yonzaw"/><path class="p1kbumysc"/><path class="ozl2zbbuw"/></g>`,
		"fallback": "withicons-bauhaus:file-input",
	});
}

export default Component;
