import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5s43x33f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5s43x33f"/>`,
		"fallback": "temaki:hut",
	});
}

export default Component;
