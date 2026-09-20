import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt5h8wfck.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt5h8wfck"/>`,
		"fallback": "maki:cafe-11",
	});
}

export default Component;
