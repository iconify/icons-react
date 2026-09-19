import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av9ti37jd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av9ti37jd"/>`,
		"fallback": "ant-design:insert-row-left",
	});
}

export default Component;
