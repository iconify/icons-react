import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss8l_1bpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss8l_1bpi"/>`,
		"fallback": "cbi:ikea-jakobsbyn",
	});
}

export default Component;
