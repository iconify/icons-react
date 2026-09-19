import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqtp-q_7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqtp-q_7o"/>`,
		"fallback": "cbi:bol",
	});
}

export default Component;
