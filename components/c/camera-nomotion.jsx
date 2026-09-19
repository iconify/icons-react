import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zipr6oyhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zipr6oyhw"/>`,
		"fallback": "cbi:camera-nomotion",
	});
}

export default Component;
