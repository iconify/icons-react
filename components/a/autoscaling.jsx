import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5qpf5bjd.css';
import '../../css/s/stdjlnzrk.css';
import '../../css/g/gxdbe2bxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5qpf5bjd"/><path class="stdjlnzrk"/><path class="gxdbe2bxd"/>`,
		"fallback": "carbon:autoscaling",
	});
}

export default Component;
