import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqmqmju1q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqmqmju1q"/>`,
		"fallback": "gravity-ui:chevron-right",
	});
}

export default Component;
