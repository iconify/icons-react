import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjikcm-3o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjikcm-3o"/>`,
		"fallback": "la:file-video-solid",
	});
}

export default Component;
