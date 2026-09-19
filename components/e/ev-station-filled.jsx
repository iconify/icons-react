import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy6ubfbhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy6ubfbhi"/>`,
		"fallback": "boxicons:ev-station-filled",
	});
}

export default Component;
