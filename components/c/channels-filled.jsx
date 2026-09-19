import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3z-imbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3z-imbiu"/>`,
		"fallback": "bitcoin-icons:channels-filled",
	});
}

export default Component;
