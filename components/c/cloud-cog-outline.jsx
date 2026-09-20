import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcj88du6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcj88du6o"/>`,
		"fallback": "mdi:cloud-cog-outline",
	});
}

export default Component;
