import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hisfu9s-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hisfu9s-i"/>`,
		"fallback": "tabler:corner-right-down",
	});
}

export default Component;
