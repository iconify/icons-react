import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csw3b1buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csw3b1buz"/>`,
		"fallback": "noviair:dropdown",
	});
}

export default Component;
