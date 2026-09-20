import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdum7db5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdum7db5d"/>`,
		"fallback": "mdi:clipboard-play-multiple",
	});
}

export default Component;
