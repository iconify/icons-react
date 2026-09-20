import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdbu7kk1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdbu7kk1s"/>`,
		"fallback": "mage:dialer-keypad-fill",
	});
}

export default Component;
