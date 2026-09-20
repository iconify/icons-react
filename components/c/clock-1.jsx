import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0yxp6b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0yxp6b9j"/>`,
		"fallback": "keyline-icons:clock-1",
	});
}

export default Component;
