import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_dkz_b7w.css';
import '../../css/c/c71lr3byd.css';
import '../../css/o/o-rk52blx.css';
import '../../css/v/vpdowm55h.css';
import '../../css/r/ryq8sb6as.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_dkz_b7w"/><circle class="c71lr3byd"/><circle class="o-rk52blx"/><circle class="vpdowm55h"/><circle class="ryq8sb6as"/></g>`,
		"fallback": "icon-park-outline:frog",
	});
}

export default Component;
