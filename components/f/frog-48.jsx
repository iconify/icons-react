import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cifz9-27c.css';
import '../../css/w/w1o4mgb4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cifz9-27c"/><path class="w1o4mgb4h"/>`,
		"fallback": "energy-icons:frog-48",
	});
}

export default Component;
