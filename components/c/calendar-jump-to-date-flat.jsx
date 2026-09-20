import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ce2fvzi3c.css';
import '../../css/v/v0jecto8p.css';
import '../../css/v/vvmmqubnu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ce2fvzi3c"/><path class="v0jecto8p"/><path clip-rule="evenodd" class="vvmmqubnu"/></g>`,
		"fallback": "streamline-color:calendar-jump-to-date-flat",
	});
}

export default Component;
