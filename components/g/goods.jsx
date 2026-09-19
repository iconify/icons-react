import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjkdamf3a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjkdamf3a"/>`,
		"fallback": "ep:goods",
	});
}

export default Component;
