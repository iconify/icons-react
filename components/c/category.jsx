import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk6sm91fr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk6sm91fr"/>`,
		"fallback": "dashicons:category",
	});
}

export default Component;
