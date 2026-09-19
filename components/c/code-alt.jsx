import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wea5057ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wea5057ad"/>`,
		"fallback": "boxicons:code-alt",
	});
}

export default Component;
