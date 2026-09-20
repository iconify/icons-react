import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn5t7vble.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn5t7vble"/>`,
		"fallback": "pinhead:geyser",
	});
}

export default Component;
