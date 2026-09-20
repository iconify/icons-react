import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktofrqzfa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktofrqzfa"/>`,
		"fallback": "mdi-light:alert-circle",
	});
}

export default Component;
