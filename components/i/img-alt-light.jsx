import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/j/jwum6hb4u.css';
import '../../css/b/bakchowuc.css';
import '../../css/y/y_fwr5blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="jwum6hb4u"/><path class="bakchowuc"/><path class="y_fwr5blk"/></g>`,
		"fallback": "lets-icons:img-alt-light",
	});
}

export default Component;
