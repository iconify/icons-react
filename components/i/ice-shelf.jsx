import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o76-z65vg.css';
import '../../css/v/v5zh6_2ok.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/m/mjfrbba7t.css';
import '../../css/t/t02fqreuv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o76-z65vg"/><path class="v5zh6_2ok"/><g class="jn8qy4bru"><path class="mjfrbba7t"/><path class="t02fqreuv"/></g>`,
		"fallback": "openmoji:ice-shelf",
	});
}

export default Component;
