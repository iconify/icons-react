import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbt99e3-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbt99e3-g"/>`,
		"fallback": "mdi:bow-arrow",
	});
}

export default Component;
