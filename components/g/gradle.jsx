import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clsdao61r.css';
import '../../css/j/j-h21xgaa.css';
import '../../css/o/osrapabyl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="clsdao61r"><path class="j-h21xgaa"/><path class="osrapabyl"/></g>`,
		"fallback": "catppuccin:gradle",
	});
}

export default Component;
