import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrc-9yb4y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrc-9yb4y"/>`,
		"fallback": "streamline:arrow-move-solid",
	});
}

export default Component;
