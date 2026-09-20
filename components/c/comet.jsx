import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jch9lzdfa.css';
import '../../css/z/zfef1fbpu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jch9lzdfa"/><path class="zfef1fbpu"/></g>`,
		"fallback": "pepicons-pencil:comet",
	});
}

export default Component;
