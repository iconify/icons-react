import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbds7eckz.css';
import '../../css/p/p6kfs-93h.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbds7eckz"/><path class="p6kfs-93h"/>`,
		"fallback": "devicon:apacheignite-wordmark",
	});
}

export default Component;
