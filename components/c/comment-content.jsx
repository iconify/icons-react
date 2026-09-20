import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3y2lb35h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="i3y2lb35h"/>`,
		"fallback": "wordpress:comment-content",
	});
}

export default Component;
