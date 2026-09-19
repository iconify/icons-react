import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyx4-db_h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyx4-db_h"/>`,
		"fallback": "garden:arrow-left-sm-fill-16",
	});
}

export default Component;
