import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zs0dngb7n.css';
import '../../css/q/q846f4beg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="zs0dngb7n"/><path class="q846f4beg"/></g>`,
		"fallback": "cryptocurrency-color:btcz",
	});
}

export default Component;
