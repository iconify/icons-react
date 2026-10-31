import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnflv6btz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnflv6btz"/>`,
		"fallback": "coolicons:arrow-up-to-line-fill-round",
	});
}

export default Component;
