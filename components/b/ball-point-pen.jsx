import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg403wb_y.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg403wb_y"/>`,
		"fallback": "wpf:ball-point-pen",
	});
}

export default Component;
