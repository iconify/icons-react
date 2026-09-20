import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyiwk_buo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyiwk_buo"/>`,
		"fallback": "mdi:archive-minus-outline",
	});
}

export default Component;
