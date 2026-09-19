import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0s51ebnl.css';
import '../../css/p/pzvbzhw1c.css';
import '../../css/z/z-_-ey0ea.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0s51ebnl"/><path class="pzvbzhw1c"/><path class="z-_-ey0ea"/>`,
		"fallback": "formkit:datetime",
	});
}

export default Component;
