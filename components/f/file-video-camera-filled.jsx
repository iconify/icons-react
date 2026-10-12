import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc5mk5wwa.css';
import '../../css/c/csdxkcclh.css';
import '../../css/y/yyu6w0k1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc5mk5wwa"/><path class="csdxkcclh"/><path class="yyu6w0k1c"/>`,
		"fallback": "lucide-extended:file-video-camera-filled",
	});
}

export default Component;
