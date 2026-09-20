import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q96fchb_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q96fchb_x"/>`,
		"fallback": "mdi:assembly",
	});
}

export default Component;
