import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot1z51b6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot1z51b6b"/>`,
		"fallback": "thesvg-color:aboutdotme",
	});
}

export default Component;
