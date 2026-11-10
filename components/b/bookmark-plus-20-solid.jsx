import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlwlj-b0k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tlwlj-b0k"/>`,
		"fallback": "sidekickicons:bookmark-plus-20-solid",
	});
}

export default Component;
