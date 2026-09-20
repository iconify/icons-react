import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8i5p3b1y.css';
import '../../css/s/sheko5ree.css';
import '../../css/l/lgue0ybdj.css';
import '../../css/w/wjvujgtth.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8i5p3b1y"/><path class="sheko5ree"/><path class="lgue0ybdj"/><path class="wjvujgtth"/></g>`,
		"fallback": "streamline-color:class-lesson",
	});
}

export default Component;
