import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sio_2yb3i.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sio_2yb3i"/>`,
		"fallback": "wpf:guitar",
	});
}

export default Component;
