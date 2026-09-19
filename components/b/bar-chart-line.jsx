import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omuhb1bvl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omuhb1bvl"/>`,
		"fallback": "bi:bar-chart-line",
	});
}

export default Component;
