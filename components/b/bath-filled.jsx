import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0tksbo3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0tksbo3t"/>`,
		"fallback": "reicon:bath-filled",
	});
}

export default Component;
