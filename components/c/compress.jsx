import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shnqu1q9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shnqu1q9w"/>`,
		"fallback": "fe:compress",
	});
}

export default Component;
