import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg34ccc-s.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg34ccc-s"/>`,
		"fallback": "fa7-solid:burn",
	});
}

export default Component;
