import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjjw5bber.css';

const viewBox = {"width":256,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjjw5bber"/>`,
		"fallback": "ps:github",
	});
}

export default Component;
