import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvhof_brh.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvhof_brh"/>`,
		"fallback": "simple-line-icons:globe",
	});
}

export default Component;
