import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvl2anbys.css';
import '../../css/u/u9x3iha9z.css';
import '../../css/x/x9lllibsv.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="pvl2anbys"/><path clip-rule="evenodd" class="u9x3iha9z"/><path class="x9lllibsv"/></g>`,
		"fallback": "skill-icons:devto-light",
	});
}

export default Component;
