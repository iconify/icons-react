import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds9u897kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ds9u897kr"/>`,
		"fallback": "heroicons:bars-4-solid",
	});
}

export default Component;
