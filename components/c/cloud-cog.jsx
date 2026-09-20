import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u37qm4b2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u37qm4b2s"/>`,
		"fallback": "mdi:cloud-cog",
	});
}

export default Component;
