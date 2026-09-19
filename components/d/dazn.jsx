import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shan8t4to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shan8t4to"/>`,
		"fallback": "cbi:dazn",
	});
}

export default Component;
