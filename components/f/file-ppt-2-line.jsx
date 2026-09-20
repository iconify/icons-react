import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz38d-r1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz38d-r1p"/>`,
		"fallback": "ri:file-ppt-2-line",
	});
}

export default Component;
