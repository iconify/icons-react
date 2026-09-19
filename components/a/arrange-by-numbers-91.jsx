import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxpmqvbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxpmqvbyb"/>`,
		"fallback": "hugeicons:arrange-by-numbers-91",
	});
}

export default Component;
