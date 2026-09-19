import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs82pv97p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs82pv97p"/>`,
		"fallback": "garden:check-sm-stroke-16",
	});
}

export default Component;
