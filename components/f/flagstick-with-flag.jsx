import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igzplx7gf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igzplx7gf"/>`,
		"fallback": "pinhead:flagstick-with-flag",
	});
}

export default Component;
