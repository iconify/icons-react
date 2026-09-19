import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir1nr4yfk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir1nr4yfk"/>`,
		"fallback": "cbi:ikea-kallax2-upright",
	});
}

export default Component;
