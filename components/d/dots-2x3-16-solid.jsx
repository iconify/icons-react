import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjgd94-9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pjgd94-9s"/>`,
		"fallback": "sidekickicons:dots-2x3-16-solid",
	});
}

export default Component;
