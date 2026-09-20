import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq7tt2btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq7tt2btj"/>`,
		"fallback": "mdi:attachment-lock",
	});
}

export default Component;
