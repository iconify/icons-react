import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrm12vbtq.css';
import '../../css/u/u0pfqpqvf.css';
import '../../css/j/jgu3w162i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrm12vbtq"/><path class="u0pfqpqvf"/><path class="jgu3w162i"/>`,
		"fallback": "icomoon-free:frustrated",
	});
}

export default Component;
