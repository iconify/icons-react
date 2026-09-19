import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2n0gkolt.css';
import '../../css/a/abdebfw2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2n0gkolt"/><path class="abdebfw2e"/>`,
		"fallback": "bx:bxl-drupal",
	});
}

export default Component;
