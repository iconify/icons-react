import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s78duf93g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s78duf93g"/>`,
		"fallback": "hugeicons:briefcase-09",
	});
}

export default Component;
