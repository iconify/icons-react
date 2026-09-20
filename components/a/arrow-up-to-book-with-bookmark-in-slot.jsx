import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9_iqvdnw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9_iqvdnw"/>`,
		"fallback": "pinhead:arrow-up-to-book-with-bookmark-in-slot",
	});
}

export default Component;
