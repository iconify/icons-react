import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odoue8rqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odoue8rqx"/>`,
		"fallback": "cbi:hr1",
	});
}

export default Component;
