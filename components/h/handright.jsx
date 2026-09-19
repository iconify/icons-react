import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trcjn3b8t.css';

const viewBox = {"width":1024,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trcjn3b8t"/>`,
		"fallback": "whh:handright",
	});
}

export default Component;
