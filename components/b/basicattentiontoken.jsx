import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd-qr9bww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd-qr9bww"/>`,
		"fallback": "simple-icons:basicattentiontoken",
	});
}

export default Component;
