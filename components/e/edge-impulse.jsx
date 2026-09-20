import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l07u-vb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l07u-vb3d"/>`,
		"fallback": "thesvg-color:edge-impulse",
	});
}

export default Component;
