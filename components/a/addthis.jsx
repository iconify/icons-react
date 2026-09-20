import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lta4h9b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lta4h9b0i"/>`,
		"fallback": "simple-icons:addthis",
	});
}

export default Component;
