import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruvm3x1xl.css';
import '../../css/o/onte_6xom.css';
import '../../css/l/l8asgib-f.css';

const viewBox = {"width":73.721,"height":25.069};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ruvm3x1xl"><path class="onte_6xom"/><path class="l8asgib-f"/></g>`,
		"fallback": "thesvg-color:ameriprise-financial",
	});
}

export default Component;
