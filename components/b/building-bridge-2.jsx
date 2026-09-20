import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/padqvg4vq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="padqvg4vq"/>`,
		"fallback": "tabler:building-bridge-2",
	});
}

export default Component;
