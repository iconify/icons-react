import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8-7bccmu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8-7bccmu"/>`,
		"fallback": "pinhead:confused-face-in-circle",
	});
}

export default Component;
