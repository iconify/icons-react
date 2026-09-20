import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekryy-mie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekryy-mie"/>`,
		"fallback": "si:crop-line",
	});
}

export default Component;
