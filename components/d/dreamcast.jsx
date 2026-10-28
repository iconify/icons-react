import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp64d8skd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp64d8skd"/>`,
		"fallback": "cbi:dreamcast",
	});
}

export default Component;
