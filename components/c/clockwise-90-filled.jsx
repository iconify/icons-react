import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg99jbc7m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wg99jbc7m"/>`,
		"fallback": "lsicon:clockwise-90-filled",
	});
}

export default Component;
