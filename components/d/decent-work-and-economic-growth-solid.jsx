import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j09701bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j09701bge"/>`,
		"fallback": "streamline-sharp:decent-work-and-economic-growth-solid",
	});
}

export default Component;
