import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs1r29bga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs1r29bga"/>`,
		"fallback": "ri:flight-takeoff-line",
	});
}

export default Component;
