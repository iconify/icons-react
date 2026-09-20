import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t27l7qbod.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gezqwrv6i.css';
import '../../css/t/tocbj7oja.css';
import '../../css/g/gx6twnimx.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG88fztbIq" class="t27l7qbod"/></defs><mask id="SVG03GHObty" width="602" height="874" x="194" y="75" maskUnits="userSpaceOnUse" style="mask-type:alpha"><use href="#SVG88fztbIq"/></mask><g class="ft5dv1b6b"><path class="gezqwrv6i"/><use href="#SVG88fztbIq"/><g mask="url(#SVG03GHObty)"><path class="tocbj7oja"/><path class="gx6twnimx"/></g></g>`,
		"fallback": "thesvg-color:evoto",
	});
}

export default Component;
