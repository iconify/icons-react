import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imo-0w39a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imo-0w39a"/>`,
		"fallback": "bi:bar-chart-line-fill",
	});
}

export default Component;
