import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms_36u3ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms_36u3ns"/>`,
		"fallback": "mdi:alpha-y-box",
	});
}

export default Component;
