import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zv3abmbvr.css';
import '../../css/w/wnfnvklnf.css';
import '../../css/e/ez95c6pki.css';
import '../../css/r/rk65x3koe.css';
import '../../css/e/ewskc41gr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zv3abmbvr"/><path class="wnfnvklnf"/><path class="ez95c6pki"/><path class="rk65x3koe"/><path class="ewskc41gr"/></g>`,
		"fallback": "streamline-color:ai-redo-spark",
	});
}

export default Component;
