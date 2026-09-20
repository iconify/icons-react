import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6c1n8bxm.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6c1n8bxm"/>`,
		"fallback": "maki:bowling-alley-11",
	});
}

export default Component;
