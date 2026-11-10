import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pblg02c7g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pblg02c7g"/>`,
		"fallback": "sidekickicons:bookmark-plus-16-solid",
	});
}

export default Component;
