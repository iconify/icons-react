import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raun3xbhc.css';
import '../../css/d/dk3eigbon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raun3xbhc"/><path class="dk3eigbon"/>`,
		"fallback": "solar:chevron-first-bold-duotone",
	});
}

export default Component;
