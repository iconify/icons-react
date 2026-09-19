import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clsdao61r.css';
import '../../css/o/o0bilwbsi.css';
import '../../css/r/rlsf7gb6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="clsdao61r"><path class="o0bilwbsi"/><path class="rlsf7gb6u"/></g>`,
		"fallback": "catppuccin:groovy",
	});
}

export default Component;
