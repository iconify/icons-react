import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eydmnmr0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eydmnmr0l"/>`,
		"fallback": "streamline-cyber:account",
	});
}

export default Component;
