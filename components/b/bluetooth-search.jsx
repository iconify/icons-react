import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj7b2nb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj7b2nb_f"/>`,
		"fallback": "noviair-light:bluetooth-search",
	});
}

export default Component;
