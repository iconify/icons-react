import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtrbv7bez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtrbv7bez"/>`,
		"fallback": "uil:file-heart",
	});
}

export default Component;
