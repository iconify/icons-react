import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acp-z4b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acp-z4b0i"/>`,
		"fallback": "feather:bell",
	});
}

export default Component;
