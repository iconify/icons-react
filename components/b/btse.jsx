import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0s2u9bji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0s2u9bji"/>`,
		"fallback": "token:btse",
	});
}

export default Component;
