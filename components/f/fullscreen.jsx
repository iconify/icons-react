import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3e989k5e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3e989k5e"/>`,
		"fallback": "picon:fullscreen",
	});
}

export default Component;
