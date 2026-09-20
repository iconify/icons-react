import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqow5khri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqow5khri"/>`,
		"fallback": "thesvg-color:apostrophe",
	});
}

export default Component;
