import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9-_fxbjn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9-_fxbjn"/>`,
		"fallback": "lsicon:anticlockwise-90-outline",
	});
}

export default Component;
