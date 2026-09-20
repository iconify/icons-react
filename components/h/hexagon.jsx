import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj7zo_i3e.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj7zo_i3e"/>`,
		"fallback": "wpf:hexagon",
	});
}

export default Component;
