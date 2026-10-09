import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkgj9ib4r.css';
import '../../css/x/x1b3r-bpb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkgj9ib4r"/><path class="x1b3r-bpb"/>`,
		"fallback": "energy-icons:dump-truck-20-bold",
	});
}

export default Component;
