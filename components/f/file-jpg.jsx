import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th0kx1-kp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th0kx1-kp"/>`,
		"fallback": "uiw:file-jpg",
	});
}

export default Component;
