import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/knf3rvd3j.css';
import '../../css/d/dr-virjkz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="knf3rvd3j"/><path class="dr-virjkz"/></g>`,
		"fallback": "icon-park:go-start",
	});
}

export default Component;
