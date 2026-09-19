import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clsdao61r.css';
import '../../css/i/iip0rz5nl.css';
import '../../css/o/oqq-bg_3g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="clsdao61r"><path class="iip0rz5nl"/><path class="oqq-bg_3g"/></g>`,
		"fallback": "catppuccin:dart",
	});
}

export default Component;
