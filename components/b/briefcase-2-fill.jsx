import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfr7nx0rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfr7nx0rv"/>`,
		"fallback": "ri:briefcase-2-fill",
	});
}

export default Component;
