import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjr9i_a7v.css';
import '../../css/m/m5y4f8bjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="jjr9i_a7v"/><path class="m5y4f8bjk"/>`,
		"fallback": "mingcute:apple-intelligence-frame-line",
	});
}

export default Component;
