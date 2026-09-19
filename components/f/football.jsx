import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z7k2icbul.css';
import '../../css/k/kwtxje57q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z7k2icbul"/><path class="kwtxje57q"/></g>`,
		"fallback": "iconoir:football",
	});
}

export default Component;
