import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9cdm0b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9cdm0b2r"/>`,
		"fallback": "withicons:avatar-cat-gloss",
	});
}

export default Component;
