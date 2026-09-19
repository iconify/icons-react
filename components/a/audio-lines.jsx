import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xilkr0bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xilkr0bbh"/>`,
		"fallback": "hugeicons:audio-lines",
	});
}

export default Component;
