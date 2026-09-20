import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_xl-jo9w.css';
import '../../css/d/d46rroheb.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_xl-jo9w"/><path class="d46rroheb"/>`,
		"fallback": "iwwa:box",
	});
}

export default Component;
