import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4qjz4jhf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b4qjz4jhf"/>`,
		"fallback": "sidekickicons:face-meh-16-solid",
	});
}

export default Component;
