import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yid9b7myf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yid9b7myf"/>`,
		"fallback": "simple-icons:e3",
	});
}

export default Component;
