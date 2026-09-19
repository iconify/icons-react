import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odchxkbav.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odchxkbav"/>`,
		"fallback": "ant-design:ie",
	});
}

export default Component;
