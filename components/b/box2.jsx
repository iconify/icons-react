import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr9ai5wvc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr9ai5wvc"/>`,
		"fallback": "bi:box2",
	});
}

export default Component;
