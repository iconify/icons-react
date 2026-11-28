import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4fw8wg_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4fw8wg_f"/>`,
		"fallback": "noviair-light:headphones-x",
	});
}

export default Component;
