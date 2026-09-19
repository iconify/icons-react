import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-5pfkb2b.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-5pfkb2b"/>`,
		"fallback": "el:circle-arrow-up",
	});
}

export default Component;
