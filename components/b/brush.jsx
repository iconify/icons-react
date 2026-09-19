import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k73w4j2dh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k73w4j2dh"/>`,
		"fallback": "dinkie-icons:brush",
	});
}

export default Component;
