import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4iudzo1t.css';
import '../../css/t/txqx25ycu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4iudzo1t"/><path class="txqx25ycu"/>`,
		"fallback": "boxicons:cat-body",
	});
}

export default Component;
