import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bof77n6om.css';
import '../../css/m/mn9zp8bxl.css';
import '../../css/j/jr5b5nohz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bof77n6om"/><path class="mn9zp8bxl"/><path class="jr5b5nohz"/>`,
		"fallback": "thesvg-color:haskell",
	});
}

export default Component;
