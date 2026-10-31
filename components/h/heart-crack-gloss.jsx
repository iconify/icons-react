import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_3xj1bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_3xj1bth"/>`,
		"fallback": "withicons:heart-crack-gloss",
	});
}

export default Component;
