import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhz0dobwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhz0dobwf"/>`,
		"fallback": "tabler:chevron-down-left",
	});
}

export default Component;
