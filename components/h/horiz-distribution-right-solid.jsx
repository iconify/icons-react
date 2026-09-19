import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l5jrfnb1l.css';
import '../../css/y/yxfs3nbpx.css';
import '../../css/n/nuyjr3i2v.css';
import '../../css/n/nn-_ctbfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l5jrfnb1l"/><path class="yxfs3nbpx"/><path class="nuyjr3i2v"/><path class="nn-_ctbfr"/></g>`,
		"fallback": "iconoir:horiz-distribution-right-solid",
	});
}

export default Component;
