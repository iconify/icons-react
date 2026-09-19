import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obit9z1kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obit9z1kw"/>`,
		"fallback": "heroicons-outline:cake",
	});
}

export default Component;
