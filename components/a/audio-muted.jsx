import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joucdub-z.css';
import '../../css/h/hwp54b9_z.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joucdub-z"/><path class="hwp54b9_z"/>`,
		"fallback": "ant-design:audio-muted",
	});
}

export default Component;
