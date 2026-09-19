import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u62fcjb8x.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u62fcjb8x"/>`,
		"fallback": "ant-design:environment-outline",
	});
}

export default Component;
