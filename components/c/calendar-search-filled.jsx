import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwdovkx8c.css';
import '../../css/w/w3nlvcvue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwdovkx8c"/><path class="w3nlvcvue"/>`,
		"fallback": "boxicons:calendar-search-filled",
	});
}

export default Component;
