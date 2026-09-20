import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wey83sbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wey83sbph"/>`,
		"fallback": "mdi:house-flood",
	});
}

export default Component;
