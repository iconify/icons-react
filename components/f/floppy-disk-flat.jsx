import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yqhcq8o7r.css';
import '../../css/f/fy--zu7pj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yqhcq8o7r"/><path class="fy--zu7pj"/></g>`,
		"fallback": "streamline-flex-color:floppy-disk-flat",
	});
}

export default Component;
