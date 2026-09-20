import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_rm4k30i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_rm4k30i"/>`,
		"fallback": "thesvg-color:breaker",
	});
}

export default Component;
