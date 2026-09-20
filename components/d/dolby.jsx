import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vet4z41ty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vet4z41ty"/>`,
		"fallback": "simple-icons:dolby",
	});
}

export default Component;
