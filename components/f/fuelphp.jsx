import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh34hyb1u.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh34hyb1u"/>`,
		"fallback": "whh:fuelphp",
	});
}

export default Component;
