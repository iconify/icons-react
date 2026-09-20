import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfd502z7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfd502z7o"/>`,
		"fallback": "mdi:burger-minus",
	});
}

export default Component;
