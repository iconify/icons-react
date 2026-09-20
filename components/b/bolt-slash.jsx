import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2_s99bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2_s99bpl"/>`,
		"fallback": "uil:bolt-slash",
	});
}

export default Component;
