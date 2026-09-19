import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv0pf1iqz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv0pf1iqz"/>`,
		"fallback": "garden:123-fill-16",
	});
}

export default Component;
