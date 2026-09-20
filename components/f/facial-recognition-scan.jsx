import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2qx0lb9r.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2qx0lb9r"/>`,
		"fallback": "wpf:facial-recognition-scan",
	});
}

export default Component;
