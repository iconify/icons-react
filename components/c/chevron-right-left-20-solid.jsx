import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6vvru-gh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6vvru-gh"/>`,
		"fallback": "sidekickicons:chevron-right-left-20-solid",
	});
}

export default Component;
