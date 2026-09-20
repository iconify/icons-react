import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv9nbac7r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv9nbac7r"/>`,
		"fallback": "streamline-ultimate:expand-full-bold",
	});
}

export default Component;
