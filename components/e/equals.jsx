import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm1n6kb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm1n6kb_v"/>`,
		"fallback": "heroicons:equals",
	});
}

export default Component;
