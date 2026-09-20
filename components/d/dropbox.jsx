import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jei4ukbyl.css';
import '../../css/u/uia4ixvgg.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jei4ukbyl"/><path class="uia4ixvgg"/></g>`,
		"fallback": "thesvg-color:dropbox",
	});
}

export default Component;
