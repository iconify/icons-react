import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a2arncpdg.css';
import '../../css/y/ypq9i8bvk.css';
import '../../css/j/j1d-3tb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a2arncpdg"/><path class="ypq9i8bvk"/><path class="j1d-3tb9r"/></g>`,
		"fallback": "hugeicons:cctv",
	});
}

export default Component;
