import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3d3babjk.css';
import '../../css/o/owcw62b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3d3babjk"/><path class="owcw62b-u"/>`,
		"fallback": "boxicons:hand-rock-filled",
	});
}

export default Component;
