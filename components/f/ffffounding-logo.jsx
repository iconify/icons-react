import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv2vtcs3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv2vtcs3n"/>`,
		"fallback": "streamline-logos:ffffounding-logo",
	});
}

export default Component;
