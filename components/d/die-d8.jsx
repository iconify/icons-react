import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q22nrovpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q22nrovpd"/>`,
		"fallback": "mdi:die-d8",
	});
}

export default Component;
