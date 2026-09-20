import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrd6dk6om.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrd6dk6om"/>`,
		"fallback": "keyline-icons:car",
	});
}

export default Component;
