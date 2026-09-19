import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj2b-d93h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj2b-d93h"/>`,
		"fallback": "cbi:bmw-alt",
	});
}

export default Component;
