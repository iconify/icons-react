import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kedgqhb0m.css';
import '../../css/c/c8gr5rb1v.css';
import '../../css/x/xrp0be2xv.css';
import '../../css/d/dctwlj4pp.css';
import '../../css/s/sojskj61w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kedgqhb0m"/><path class="c8gr5rb1v"/><path class="xrp0be2xv"/><path class="dctwlj4pp"/><path class="sojskj61w"/></g>`,
		"fallback": "iconoir:dogecoin-rotate-out",
	});
}

export default Component;
