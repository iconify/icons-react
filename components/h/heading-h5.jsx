import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzvoi370p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzvoi370p"/>`,
		"fallback": "gridicons:heading-h5",
	});
}

export default Component;
