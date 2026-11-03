import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c74e8fbuk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c74e8fbuk"/>`,
		"fallback": "sidekickicons:backward-bar-16-solid",
	});
}

export default Component;
