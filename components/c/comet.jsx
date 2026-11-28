import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgrbh47_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgrbh47_r"/>`,
		"fallback": "noviair-light:comet",
	});
}

export default Component;
