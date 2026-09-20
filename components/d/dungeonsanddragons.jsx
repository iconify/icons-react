import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1rlpabge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1rlpabge"/>`,
		"fallback": "simple-icons:dungeonsanddragons",
	});
}

export default Component;
