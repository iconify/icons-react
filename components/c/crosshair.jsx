import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_r3zubbw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_r3zubbw"/>`,
		"fallback": "bi:crosshair",
	});
}

export default Component;
