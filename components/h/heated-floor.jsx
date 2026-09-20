import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guj_qqblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guj_qqblk"/>`,
		"fallback": "mdi:heated-floor",
	});
}

export default Component;
