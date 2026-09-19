import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_kozj14v.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_kozj14v"/>`,
		"fallback": "foundation:bluetooth",
	});
}

export default Component;
