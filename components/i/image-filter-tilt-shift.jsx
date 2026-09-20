import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzsx4hbtu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzsx4hbtu"/>`,
		"fallback": "mdi:image-filter-tilt-shift",
	});
}

export default Component;
