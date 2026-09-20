import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u5qwpub9r.css';
import '../../css/f/ftcyc8uqj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u5qwpub9r"/><path class="ftcyc8uqj"/></g>`,
		"fallback": "streamline-color:ai-vehicle-spark-1-flat",
	});
}

export default Component;
