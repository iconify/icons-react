import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9gwph64c.css';

const viewBox = {"width":175,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9gwph64c"/>`,
		"fallback": "ls:1",
	});
}

export default Component;
