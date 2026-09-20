import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz_4aobwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz_4aobwh"/>`,
		"fallback": "thesvg-color:honey",
	});
}

export default Component;
