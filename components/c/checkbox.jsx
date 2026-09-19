import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f324_hb1n.css';
import '../../css/e/edm1wthdh.css';

const viewBox = {"width":44,"height":44};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="f324_hb1n"/><path class="edm1wthdh"/>`,
		"fallback": "formkit:checkbox",
	});
}

export default Component;
