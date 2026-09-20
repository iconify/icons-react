import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsfadac5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsfadac5s"/>`,
		"fallback": "pixelarticons:align-vertical-justify-end-sharp",
	});
}

export default Component;
