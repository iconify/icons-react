import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrxsc7bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrxsc7bkl"/>`,
		"fallback": "withicons:image-gloss",
	});
}

export default Component;
