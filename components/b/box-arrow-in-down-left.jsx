import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fotb8jbur.css';
import '../../css/r/r8p5v9bdz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="fotb8jbur"/><path class="r8p5v9bdz"/></g>`,
		"fallback": "bi:box-arrow-in-down-left",
	});
}

export default Component;
