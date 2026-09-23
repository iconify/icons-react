import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp97c3bgd.css';
import '../../css/x/xzk0f8bqn.css';
import '../../css/s/s438uqbxg.css';

const viewBox = {"width":89.668,"height":81.905};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qp97c3bgd"><path class="xzk0f8bqn"/><path class="s438uqbxg"/></g>`,
		"fallback": "thesvg-color:digitus",
	});
}

export default Component;
