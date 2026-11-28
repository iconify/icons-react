import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv9tauant.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv9tauant"/>`,
		"fallback": "noviair-light:contract-clock",
	});
}

export default Component;
