import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/peplw6b2b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="peplw6b2b"/>`,
		"fallback": "pinhead:flagstick-with-pennant",
	});
}

export default Component;
