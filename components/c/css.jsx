import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulra56alq.css';
import '../../css/s/soqzb4g1r.css';
import '../../css/b/bmznkrbcu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ulra56alq"><path class="soqzb4g1r"/><path class="bmznkrbcu"/></g>`,
		"fallback": "catppuccin:css",
	});
}

export default Component;
