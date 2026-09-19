import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnq6aobdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnq6aobdq"/>`,
		"fallback": "eos-icons:fork-outlined",
	});
}

export default Component;
