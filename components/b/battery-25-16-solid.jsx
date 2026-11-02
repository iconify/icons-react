import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u93ly2v1y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u93ly2v1y"/>`,
		"fallback": "sidekickicons:battery-25-16-solid",
	});
}

export default Component;
