import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x07oq7k1t.css';
import '../../css/h/h02a5vbhw.css';
import '../../css/b/bz2g1kbhd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x07oq7k1t"/><path class="h02a5vbhw"/><path class="bz2g1kbhd"/>`,
		"fallback": "energy-icons:bookmark-plus-20-bold",
	});
}

export default Component;
