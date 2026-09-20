import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s45z6dz8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s45z6dz8t"/>`,
		"fallback": "uil:image-download",
	});
}

export default Component;
