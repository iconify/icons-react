import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tisqd0b5c.css';
import '../../css/d/d4z24ff_g.css';

const viewBox = {"width":13,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tisqd0b5c"/><path class="d4z24ff_g"/>`,
		"fallback": "formkit:flag",
	});
}

export default Component;
