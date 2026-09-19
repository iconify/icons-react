import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2d7j5b7e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2d7j5b7e"/>`,
		"fallback": "bi:easel2",
	});
}

export default Component;
