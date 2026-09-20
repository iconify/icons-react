import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j04tt7qvp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j04tt7qvp"/>`,
		"fallback": "streamline:ai-prompt-spark-solid",
	});
}

export default Component;
