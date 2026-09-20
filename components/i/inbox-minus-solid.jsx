import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqaxb0b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqaxb0b4k"/>`,
		"fallback": "mynaui:inbox-minus-solid",
	});
}

export default Component;
