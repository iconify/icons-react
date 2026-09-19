import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjqaj78ut.css';
import '../../css/z/zra9s3b9j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjqaj78ut"/><path class="zra9s3b9j"/>`,
		"fallback": "fxemoji:blacksquarebutton",
	});
}

export default Component;
