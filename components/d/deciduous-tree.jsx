import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx2cn224h.css';
import '../../css/z/zll_hvb4v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lx2cn224h"/><path class="zll_hvb4v"/></g>`,
		"fallback": "fluent-emoji-flat:deciduous-tree",
	});
}

export default Component;
