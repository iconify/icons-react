import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2ofxv7vs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g2ofxv7vs"/>`,
		"fallback": "solar:arrow-to-top-left-outline",
	});
}

export default Component;
