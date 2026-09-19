import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwew6rbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwew6rbik"/>`,
		"fallback": "griddy-icons:close",
	});
}

export default Component;
