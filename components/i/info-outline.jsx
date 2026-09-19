import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcklpyb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcklpyb5z"/>`,
		"fallback": "bitcoin-icons:info-outline",
	});
}

export default Component;
