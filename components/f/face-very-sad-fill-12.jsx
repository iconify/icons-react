import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l39qosc6t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l39qosc6t"/>`,
		"fallback": "garden:face-very-sad-fill-12",
	});
}

export default Component;
