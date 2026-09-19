import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lidfixb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lidfixb8e"/>`,
		"fallback": "cbi:dune-hd",
	});
}

export default Component;
