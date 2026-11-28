import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcq30tebd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcq30tebd"/>`,
		"fallback": "noviair-light:ev-charger-check",
	});
}

export default Component;
