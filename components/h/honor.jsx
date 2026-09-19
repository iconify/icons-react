import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dou5g5byt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dou5g5byt"/>`,
		"fallback": "hugeicons:honor",
	});
}

export default Component;
