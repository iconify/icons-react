import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nox49tb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nox49tb7m"/>`,
		"fallback": "mdi:event-star-four-points",
	});
}

export default Component;
