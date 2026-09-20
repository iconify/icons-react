import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy3oz7v9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy3oz7v9g"/>`,
		"fallback": "ri:add-line",
	});
}

export default Component;
