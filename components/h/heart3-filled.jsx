import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iekxtii2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iekxtii2p"/>`,
		"fallback": "reicon:heart3-filled",
	});
}

export default Component;
