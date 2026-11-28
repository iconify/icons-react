import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx1b0tbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx1b0tbaj"/>`,
		"fallback": "noviair-light:crown",
	});
}

export default Component;
