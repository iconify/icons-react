import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/l31218bhz.css';
import '../../css/f/fa4l9cepg.css';
import '../../css/j/jyoq52b4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="l31218bhz"/><path class="fa4l9cepg"/><path class="jyoq52b4j"/></g>`,
		"fallback": "hugeicons:boxes",
	});
}

export default Component;
