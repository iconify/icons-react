import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdn3qrb3o.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdn3qrb3o"/>`,
		"fallback": "wi:direction-up-right",
	});
}

export default Component;
