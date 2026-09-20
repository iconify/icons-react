import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r96o9m0kk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r96o9m0kk"/>`,
		"fallback": "oi:check",
	});
}

export default Component;
