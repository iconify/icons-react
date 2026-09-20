import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cge0fdcdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cge0fdcdc"/>`,
		"fallback": "ri:chat-upload-fill",
	});
}

export default Component;
