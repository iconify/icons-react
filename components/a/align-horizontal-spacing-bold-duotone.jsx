import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewu5_fbdb.css';
import '../../css/g/g4sooab0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ewu5_fbdb"/><path class="g4sooab0i"/>`,
		"fallback": "solar:align-horizontal-spacing-bold-duotone",
	});
}

export default Component;
