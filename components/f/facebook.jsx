import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le7bgtmct.css';

const viewBox = {"width":224,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le7bgtmct"/>`,
		"fallback": "ps:facebook",
	});
}

export default Component;
