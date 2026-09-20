import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvmsos8ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvmsos8ll"/>`,
		"fallback": "mdi:dice-2-outline",
	});
}

export default Component;
