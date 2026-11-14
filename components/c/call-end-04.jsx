import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-jf2nb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-jf2nb1b"/>`,
		"fallback": "hugeicons:call-end-04",
	});
}

export default Component;
