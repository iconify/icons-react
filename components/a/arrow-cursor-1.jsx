import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buos942us.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buos942us"/>`,
		"fallback": "streamline:arrow-cursor-1",
	});
}

export default Component;
