import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6cnv5qul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y6cnv5qul"/>`,
		"fallback": "reicon:align-v-center-filled",
	});
}

export default Component;
