import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_k7z_b-f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_k7z_b-f"/>`,
		"fallback": "garden:arrow-reverse-stroke-20",
	});
}

export default Component;
