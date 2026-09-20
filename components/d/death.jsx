import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmsj9h2cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmsj9h2cw"/>`,
		"fallback": "mdi:death",
	});
}

export default Component;
