import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgjgk_8pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgjgk_8pb"/>`,
		"fallback": "flowbite:forward-step-outline",
	});
}

export default Component;
