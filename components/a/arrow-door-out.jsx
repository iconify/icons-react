import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zz4ioac6i.css';
import '../../css/k/k5fx1rbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zz4ioac6i"/><path class="k5fx1rbef"/></g>`,
		"fallback": "reicon:arrow-door-out",
	});
}

export default Component;
