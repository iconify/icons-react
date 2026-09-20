import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx03ew4kg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx03ew4kg"/>`,
		"fallback": "reicon:archive-minus-filled",
	});
}

export default Component;
