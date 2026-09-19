import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kasr6-q8m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kasr6-q8m"/>`,
		"fallback": "dashicons:image-crop",
	});
}

export default Component;
