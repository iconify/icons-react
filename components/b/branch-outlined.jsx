import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upgwdk1vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upgwdk1vz"/>`,
		"fallback": "eos-icons:branch-outlined",
	});
}

export default Component;
