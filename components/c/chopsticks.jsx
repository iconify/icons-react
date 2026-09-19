import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzs1ir2gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzs1ir2gw"/>`,
		"fallback": "hugeicons:chopsticks",
	});
}

export default Component;
