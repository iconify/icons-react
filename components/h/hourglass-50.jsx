import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/eh7ei6juo.css';
import '../../css/m/mqm762b3o.css';
import '../../css/h/h2qiaoulr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="eh7ei6juo"/><path class="mqm762b3o"/><path class="h2qiaoulr"/></g>`,
		"fallback": "glyphs:hourglass-50",
	});
}

export default Component;
