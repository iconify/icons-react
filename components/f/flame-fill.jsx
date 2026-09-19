import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv1iwcb1q.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv1iwcb1q"/>`,
		"fallback": "f7:flame-fill",
	});
}

export default Component;
