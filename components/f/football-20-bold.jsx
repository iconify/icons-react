import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/w/wgln2hffk.css';
import '../../css/p/pplik6nrd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="wgln2hffk"/><path class="pplik6nrd"/>`,
		"fallback": "energy-icons:football-20-bold",
	});
}

export default Component;
