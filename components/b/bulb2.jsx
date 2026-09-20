import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drgj1zbmh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drgj1zbmh"/>`,
		"fallback": "temaki:bulb2",
	});
}

export default Component;
