import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ney9ldy-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ney9ldy-d"/>`,
		"fallback": "si:flag-fill",
	});
}

export default Component;
