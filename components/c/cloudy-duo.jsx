import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jldud0b0q.css';
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
		"content": `<path class="jldud0b0q secondary"/><g class="dt0cm9dhy primary"><path class="qlj8bqbvn"/><path class="jv3i1sccx"/></g>`,
		"fallback": "iconaut:cloudy-duo",
	});
}

export default Component;
