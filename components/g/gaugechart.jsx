import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blvs_rbgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blvs_rbgr"/>`,
		"fallback": "ix:gaugechart",
	});
}

export default Component;
