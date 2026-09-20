import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe0s7db0a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe0s7db0a"/>`,
		"fallback": "pinhead:bird-and-exclamation-point",
	});
}

export default Component;
