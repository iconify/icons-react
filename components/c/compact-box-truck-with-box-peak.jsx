import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh4e6ccdo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh4e6ccdo"/>`,
		"fallback": "pinhead:compact-box-truck-with-box-peak",
	});
}

export default Component;
