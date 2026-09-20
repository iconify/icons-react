import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l47nr7bbh.css';
import '../../css/k/k1skse-0v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l47nr7bbh"/><path class="k1skse-0v"/></g>`,
		"fallback": "material-icon-theme:folder-bloc",
	});
}

export default Component;
