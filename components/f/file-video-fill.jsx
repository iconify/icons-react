import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/harom8_fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="harom8_fk"/>`,
		"fallback": "iconamoon:file-video-fill",
	});
}

export default Component;
