import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr8xndb1u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr8xndb1u"/>`,
		"fallback": "pinhead:bench",
	});
}

export default Component;
