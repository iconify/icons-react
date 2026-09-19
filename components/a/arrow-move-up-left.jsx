import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x36zk0bft.css';
import '../../css/q/qdf7trbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x36zk0bft"/><path class="qdf7trbpz"/></g>`,
		"fallback": "hugeicons:arrow-move-up-left",
	});
}

export default Component;
