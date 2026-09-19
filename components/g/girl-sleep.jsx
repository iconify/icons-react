import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uevs3izuh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uevs3izuh"/>`,
		"fallback": "ps:girl-sleep",
	});
}

export default Component;
