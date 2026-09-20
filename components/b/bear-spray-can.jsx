import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0k6kk79s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0k6kk79s"/>`,
		"fallback": "pinhead:bear-spray-can",
	});
}

export default Component;
