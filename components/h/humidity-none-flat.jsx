import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i0jfmqbyr.css';
import '../../css/j/jvd558cyr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="i0jfmqbyr"/><path class="jvd558cyr"/></g>`,
		"fallback": "streamline-color:humidity-none-flat",
	});
}

export default Component;
