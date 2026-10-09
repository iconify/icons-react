import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6mvyw5ng.css';
import '../../css/w/wmyr2uy2r.css';
import '../../css/b/bei9vou_l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6mvyw5ng"/><path class="wmyr2uy2r"/><path class="bei9vou_l"/>`,
		"fallback": "energy-icons:git-pull-request-20-bold",
	});
}

export default Component;
