import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/eh7ei6juo.css';
import '../../css/r/rdkn75bmr.css';
import '../../css/w/wjqjuirmf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="eh7ei6juo"/><path class="rdkn75bmr"/><path class="wjqjuirmf"/></g>`,
		"fallback": "glyphs:hourglass-0",
	});
}

export default Component;
