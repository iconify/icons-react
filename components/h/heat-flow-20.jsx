import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee5vtnbjr.css';
import '../../css/h/hxpk5bbgt.css';
import '../../css/f/fo22hzbij.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee5vtnbjr"/><path class="hxpk5bbgt"/><path class="fo22hzbij"/>`,
		"fallback": "energy-icons:heat-flow-20",
	});
}

export default Component;
