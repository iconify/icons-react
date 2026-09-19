import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kztft4bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kztft4bih"/>`,
		"fallback": "boxicons:border-none-filled",
	});
}

export default Component;
