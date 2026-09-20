import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nw21fqb1s.css';
import '../../css/r/r9hyg7b7k.css';
import '../../css/p/p9-zrkb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nw21fqb1s"/><path class="r9hyg7b7k"/><path class="p9-zrkb4g"/></g>`,
		"fallback": "reicon:bucket-circle",
	});
}

export default Component;
