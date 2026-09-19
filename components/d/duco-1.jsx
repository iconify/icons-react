import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz1m15bxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz1m15bxz"/>`,
		"fallback": "cbi:duco-1",
	});
}

export default Component;
