import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljrck1b8k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljrck1b8k"/>`,
		"fallback": "pinhead:bridge-shape-vertical",
	});
}

export default Component;
