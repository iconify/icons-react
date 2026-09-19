import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1aohj47b.css';

const viewBox = {"width":24,"height":24,"left":0.05,"top":0.05};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1aohj47b"/>`,
		"fallback": "eva:corner-down-left-fill",
	});
}

export default Component;
