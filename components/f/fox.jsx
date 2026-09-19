import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmd0k7brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmd0k7brn"/>`,
		"fallback": "cbi:fox",
	});
}

export default Component;
