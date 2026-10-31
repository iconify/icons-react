import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_x2_qk6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_x2_qk6x"/>`,
		"fallback": "coolicons:headphones-duocolor-round",
	});
}

export default Component;
