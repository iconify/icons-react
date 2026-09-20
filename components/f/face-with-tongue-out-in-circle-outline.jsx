import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qip7rlb8a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qip7rlb8a"/>`,
		"fallback": "pinhead:face-with-tongue-out-in-circle-outline",
	});
}

export default Component;
