import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wcgt-94-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wcgt-94-j"/>`,
		"fallback": "keyline-icons:align-right-two-tone",
	});
}

export default Component;
