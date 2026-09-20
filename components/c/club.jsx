import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tplczvb9u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tplczvb9u"/>`,
		"fallback": "pinhead:club",
	});
}

export default Component;
