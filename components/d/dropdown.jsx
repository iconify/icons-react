import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olzgs6svr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olzgs6svr"/>`,
		"fallback": "at-icons:dropdown",
	});
}

export default Component;
