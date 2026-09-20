import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s4zb6ebak.css';
import '../../css/z/zbqdzw69a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s4zb6ebak"/><path class="zbqdzw69a"/></g>`,
		"fallback": "streamline-color:graph-bar-decrease-flat",
	});
}

export default Component;
