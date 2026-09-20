import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsq6jsz0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsq6jsz0d"/>`,
		"fallback": "simple-icons:1and1",
	});
}

export default Component;
