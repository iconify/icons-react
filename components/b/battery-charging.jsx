import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp3swyful.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp3swyful"/>`,
		"fallback": "noviair:battery-charging",
	});
}

export default Component;
