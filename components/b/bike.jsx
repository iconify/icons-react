import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8ps7tb5m.css';

const viewBox = {"width":56,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8ps7tb5m"/>`,
		"fallback": "et:bike",
	});
}

export default Component;
