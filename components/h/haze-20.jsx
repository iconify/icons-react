import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_hv1kb5k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_hv1kb5k"/>`,
		"fallback": "energy-icons:haze-20",
	});
}

export default Component;
