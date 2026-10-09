import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulm7ljbga.css';
import '../../css/p/pfm3u1bvw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulm7ljbga"/><path class="pfm3u1bvw"/>`,
		"fallback": "energy-icons:fuse-48",
	});
}

export default Component;
