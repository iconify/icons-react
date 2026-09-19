import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx071qbax.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx071qbax"/>`,
		"fallback": "fa7-solid:cake",
	});
}

export default Component;
