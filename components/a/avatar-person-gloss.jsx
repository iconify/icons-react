import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfmhonbic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfmhonbic wm-k"/>`,
		"fallback": "withicons:avatar-person-gloss",
	});
}

export default Component;
