import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb0yl91bu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jb0yl91bu"/>`,
		"fallback": "teenyicons:chrome-outline",
	});
}

export default Component;
