import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de0jk_bdx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de0jk_bdx"/>`,
		"fallback": "pinhead:arrow-down-from-book-with-bookmark-in-slot",
	});
}

export default Component;
