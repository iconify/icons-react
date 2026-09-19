import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/eh7ei6juo.css';
import '../../css/m/mqm762b3o.css';
import '../../css/o/ob_8u5bqy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="eh7ei6juo"/><path class="mqm762b3o"/><path class="ob_8u5bqy"/></g>`,
		"fallback": "glyphs:hourglass-2",
	});
}

export default Component;
