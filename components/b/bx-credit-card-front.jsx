import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5j6r5bas.css';
import '../../css/k/kj3cr3nbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5j6r5bas"/><path class="kj3cr3nbq"/>`,
		"fallback": "bx:bx-credit-card-front",
	});
}

export default Component;
