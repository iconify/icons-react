import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkd6yqz1p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkd6yqz1p"/>`,
		"fallback": "famicons:caret-down-circle-sharp",
	});
}

export default Component;
