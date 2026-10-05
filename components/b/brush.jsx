import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/f7r0l4_pc.css';
import '../../css/n/nj0w8c_ky.css';
import '../../css/n/nrx5hqbhr.css';
import '../../css/z/zsncxcx3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="f7r0l4_pc"/><path class="nj0w8c_ky"/><path class="nrx5hqbhr"/><path class="zsncxcx3d"/></g>`,
		"fallback": "matita:brush",
	});
}

export default Component;
