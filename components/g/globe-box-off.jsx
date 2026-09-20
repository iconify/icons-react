import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhzm4jban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhzm4jban"/>`,
		"fallback": "mdi:globe-box-off",
	});
}

export default Component;
