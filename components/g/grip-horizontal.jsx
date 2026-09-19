import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv14burdq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sv14burdq"/>`,
		"fallback": "bi:grip-horizontal",
	});
}

export default Component;
