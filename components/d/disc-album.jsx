import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q1m15dbht.css';
import '../../css/o/o3t_kjb7a.css';
import '../../css/y/y7zppqbne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="q1m15dbht"/><path class="o3t_kjb7a"/><path class="y7zppqbne"/></g>`,
		"fallback": "hugeicons:disc-album",
	});
}

export default Component;
