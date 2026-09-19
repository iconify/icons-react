import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8x-vccbi.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8x-vccbi"/>`,
		"fallback": "whh:idea",
	});
}

export default Component;
