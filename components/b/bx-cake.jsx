import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmd31ubyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmd31ubyp"/>`,
		"fallback": "bx:bx-cake",
	});
}

export default Component;
