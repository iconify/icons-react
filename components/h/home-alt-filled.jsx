import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvylydb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvylydb0n"/>`,
		"fallback": "boxicons:home-alt-filled",
	});
}

export default Component;
