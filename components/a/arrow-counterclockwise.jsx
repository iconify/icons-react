import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipg4k0btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipg4k0btv"/>`,
		"fallback": "proicons:arrow-counterclockwise",
	});
}

export default Component;
