import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piui6-jib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piui6-jib"/>`,
		"fallback": "boxicons:ghost-filled",
	});
}

export default Component;
