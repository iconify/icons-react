import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5k9mk7lh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5k9mk7lh"/>`,
		"fallback": "ri:airplay-line",
	});
}

export default Component;
