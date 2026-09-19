import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xen0-cbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xen0-cbeq"/>`,
		"fallback": "cbi:aston-martin",
	});
}

export default Component;
