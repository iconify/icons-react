import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk5u3zgrs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk5u3zgrs"/>`,
		"fallback": "nimbus:chevron-right",
	});
}

export default Component;
