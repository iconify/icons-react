import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgissgbda.css';
import '../../css/y/yh6ditbzn.css';
import '../../css/y/ycg7g-b4l.css';
import '../../css/x/x4f46-b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgissgbda"/><path class="yh6ditbzn"/><path class="ycg7g-b4l"/><path class="x4f46-b2l"/>`,
		"fallback": "solar:file-video-camera-bold-duotone",
	});
}

export default Component;
