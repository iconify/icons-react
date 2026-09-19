import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1_h2vbri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1_h2vbri"/>`,
		"fallback": "fxemoji:downpointingredtriangle",
	});
}

export default Component;
