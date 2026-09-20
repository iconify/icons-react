import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fftbt4ikp.css';
import '../../css/z/zuqwdabeh.css';
import '../../css/w/wptgjib0k.css';
import '../../css/j/jo5vtjbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fftbt4ikp"/><path class="zuqwdabeh"/><path class="wptgjib0k"/><path class="jo5vtjbfe"/></g>`,
		"fallback": "streamline-freehand-color:business-metaphor-burn-money",
	});
}

export default Component;
