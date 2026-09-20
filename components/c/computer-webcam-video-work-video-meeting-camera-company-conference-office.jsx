import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-15t6b5h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-15t6b5h"/>`,
		"fallback": "streamline:computer-webcam-video-work-video-meeting-camera-company-conference-office",
	});
}

export default Component;
