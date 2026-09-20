import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4hav-1_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4hav-1_r"/>`,
		"fallback": "mdi:clapperboard-open-remove-outline",
	});
}

export default Component;
