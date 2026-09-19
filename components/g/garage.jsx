import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy9biv73g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy9biv73g"/>`,
		"fallback": "iconoir:garage",
	});
}

export default Component;
