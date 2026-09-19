import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1s_e0b7s.css';
import '../../css/c/cvuri1beu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n1s_e0b7s"/><path class="cvuri1beu"/>`,
		"fallback": "bxl:better-auth",
	});
}

export default Component;
