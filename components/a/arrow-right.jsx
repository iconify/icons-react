import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3vt5_b4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3vt5_b4x"/>`,
		"fallback": "nimbus:arrow-right",
	});
}

export default Component;
