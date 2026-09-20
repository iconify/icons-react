import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw9ii1w0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw9ii1w0b"/>`,
		"fallback": "mdi:hair-dryer-outline",
	});
}

export default Component;
