import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qoikssblk.css';

const viewBox = {"width":30,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qoikssblk"/>`,
		"fallback": "thesvg-color:fastwork",
	});
}

export default Component;
