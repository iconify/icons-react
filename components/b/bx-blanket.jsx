import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z04v279_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z04v279_g"/>`,
		"fallback": "bx:bx-blanket",
	});
}

export default Component;
