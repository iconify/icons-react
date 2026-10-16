import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi2mxu8vr.css';
import '../../css/e/e1wjloqot.css';
import '../../css/z/zd51tnb1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi2mxu8vr"/><path class="e1wjloqot"/><path class="zd51tnb1l"/>`,
		"fallback": "energy-icons:filter-x-48-bold",
	});
}

export default Component;
