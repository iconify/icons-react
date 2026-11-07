import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpv5vhdla.css';
import '../../css/v/v3kw1n2rf.css';
import '../../css/v/vxayymbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpv5vhdla"/><path class="v3kw1n2rf"/><path class="vxayymbsk"/>`,
		"fallback": "solar:accessibility-bold-duotone",
	});
}

export default Component;
