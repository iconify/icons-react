import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn1pn-dlk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn1pn-dlk"/>`,
		"fallback": "pinhead:circle-outline-with-top-left-quarter-and-bottom-right-quarter",
	});
}

export default Component;
