import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bz0ohmntq.css';
import '../../css/x/xgdp6pb2v.css';
import '../../css/d/dyq4pdb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bz0ohmntq"/><path class="xgdp6pb2v"/><path class="dyq4pdb8l"/></g>`,
		"fallback": "hugeicons:drag-left-04",
	});
}

export default Component;
