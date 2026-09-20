import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow7g2ackt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow7g2ackt"/>`,
		"fallback": "tabler:device-imac-heart",
	});
}

export default Component;
