import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpxt461id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpxt461id"/>`,
		"fallback": "humbleicons:download",
	});
}

export default Component;
