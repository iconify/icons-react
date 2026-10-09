import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmkt2cc1f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmkt2cc1f"/>`,
		"fallback": "energy-icons:caret-down-20",
	});
}

export default Component;
