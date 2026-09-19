import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh4t1tb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh4t1tb2k"/>`,
		"fallback": "gg:cross",
	});
}

export default Component;
