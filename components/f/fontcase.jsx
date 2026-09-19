import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jps97ubht.css';

const viewBox = {"width":1026,"height":1023};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jps97ubht"/>`,
		"fallback": "whh:fontcase",
	});
}

export default Component;
