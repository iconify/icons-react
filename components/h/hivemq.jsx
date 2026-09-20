import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv2wa8biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv2wa8biu"/>`,
		"fallback": "thesvg-color:hivemq",
	});
}

export default Component;
