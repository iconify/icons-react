import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uklv7lbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uklv7lbiw"/>`,
		"fallback": "noviair:cloud-rain",
	});
}

export default Component;
