import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0ysopb_l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p0ysopb_l"/>`,
		"fallback": "sidekickicons:folder-x-mark-16-solid",
	});
}

export default Component;
