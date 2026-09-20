import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/x2s-ghbes.css';
import '../../css/l/ljsts9kya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="x2s-ghbes"/><path class="ljsts9kya"/></g>`,
		"fallback": "reicon:hierarchy",
	});
}

export default Component;
