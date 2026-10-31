import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyl5hdmoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyl5hdmoa"/>`,
		"fallback": "coolicons:arrow-down-left-large-duotone-round",
	});
}

export default Component;
