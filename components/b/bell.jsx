import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-m9x5g6f.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-m9x5g6f"/>`,
		"fallback": "simple-line-icons:bell",
	});
}

export default Component;
