import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md2d0gm4s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md2d0gm4s"/>`,
		"fallback": "streamline-color:arrow-up-1",
	});
}

export default Component;
