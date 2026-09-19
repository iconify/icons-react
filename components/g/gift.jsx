import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzyfxg1lm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzyfxg1lm"/>`,
		"fallback": "icomoon-free:gift",
	});
}

export default Component;
