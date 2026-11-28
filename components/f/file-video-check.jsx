import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb_vzo39h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb_vzo39h"/>`,
		"fallback": "noviair-light:file-video-check",
	});
}

export default Component;
