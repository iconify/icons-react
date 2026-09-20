import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv2c5pl3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv2c5pl3r"/>`,
		"fallback": "tabler:currency-hryvnia",
	});
}

export default Component;
