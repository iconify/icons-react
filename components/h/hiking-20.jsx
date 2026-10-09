import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5-tgpcat.css';
import '../../css/a/a3mz8kb6e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5-tgpcat"/><path class="a3mz8kb6e"/>`,
		"fallback": "energy-icons:hiking-20",
	});
}

export default Component;
