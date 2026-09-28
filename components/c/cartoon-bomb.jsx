import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osl37rbbl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osl37rbbl"/>`,
		"fallback": "pinhead:cartoon-bomb",
	});
}

export default Component;
