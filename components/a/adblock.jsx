import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgi-2-fci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgi-2-fci"/>`,
		"fallback": "thesvg-color:adblock",
	});
}

export default Component;
