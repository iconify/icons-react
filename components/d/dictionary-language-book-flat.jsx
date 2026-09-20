import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a5fcl1b2z.css';
import '../../css/w/wwt-jfbqh.css';
import '../../css/h/hj5hndk9r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a5fcl1b2z"/><path class="wwt-jfbqh"/><path class="hj5hndk9r"/></g>`,
		"fallback": "streamline-color:dictionary-language-book-flat",
	});
}

export default Component;
