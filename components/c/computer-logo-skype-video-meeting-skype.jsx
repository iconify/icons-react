import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a75hd-wnc.css';
import '../../css/y/yu04o0y7e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a75hd-wnc"/><path class="yu04o0y7e"/>`,
		"fallback": "streamline:computer-logo-skype-video-meeting-skype",
	});
}

export default Component;
