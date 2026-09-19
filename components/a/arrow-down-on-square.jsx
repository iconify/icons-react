import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgn1g8e1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgn1g8e1r"/>`,
		"fallback": "heroicons:arrow-down-on-square",
	});
}

export default Component;
