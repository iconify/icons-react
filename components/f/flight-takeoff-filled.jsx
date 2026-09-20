import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihagv-bvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihagv-bvj"/>`,
		"fallback": "tdesign:flight-takeoff-filled",
	});
}

export default Component;
