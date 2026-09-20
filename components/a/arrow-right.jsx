import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyi0w9b0l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyi0w9b0l"/>`,
		"fallback": "uiw:arrow-right",
	});
}

export default Component;
