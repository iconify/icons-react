import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhyruk5mc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhyruk5mc"/>`,
		"fallback": "noviair-light:heart",
	});
}

export default Component;
