import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-5gvsbjv.css';
import '../../css/j/j89f_0dyx.css';
import '../../css/r/re3ef0big.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-5gvsbjv"/><path class="j89f_0dyx"/><path class="re3ef0big"/>`,
		"fallback": "energy-icons:git-merge-20-bold",
	});
}

export default Component;
