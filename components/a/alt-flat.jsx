import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/iorhqikzn.css';
import '../../css/b/boubz4ska.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="iorhqikzn"/><path class="boubz4ska"/></g>`,
		"fallback": "streamline-color:alt-flat",
	});
}

export default Component;
