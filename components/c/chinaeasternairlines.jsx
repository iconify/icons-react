import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxg1hjyts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxg1hjyts"/>`,
		"fallback": "simple-icons:chinaeasternairlines",
	});
}

export default Component;
