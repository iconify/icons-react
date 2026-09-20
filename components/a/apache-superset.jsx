import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsi4d59lz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsi4d59lz"/>`,
		"fallback": "thesvg-color:apache-superset",
	});
}

export default Component;
