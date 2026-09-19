import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt3masb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yt3masb1t"/>`,
		"fallback": "healthicons:geo-location-24px",
	});
}

export default Component;
