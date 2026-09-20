import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9h5r7bwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9h5r7bwp"/>`,
		"fallback": "uil:font",
	});
}

export default Component;
