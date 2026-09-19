import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hknn8vb1a.css';
import '../../css/k/ko05ptbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hknn8vb1a"/><path class="ko05ptbvc"/>`,
		"fallback": "bx:bx-windows",
	});
}

export default Component;
