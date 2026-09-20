import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh2_e72fr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh2_e72fr"/>`,
		"fallback": "la:cotton-bureau",
	});
}

export default Component;
