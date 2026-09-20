import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv2_7ilyy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv2_7ilyy"/>`,
		"fallback": "osmic:embassy-14",
	});
}

export default Component;
