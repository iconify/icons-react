import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qlj8bqbvn.css';
import '../../css/j/jv3i1sccx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qlj8bqbvn"/><path class="jv3i1sccx"/></g>`,
		"fallback": "iconaut:cloudy",
	});
}

export default Component;
