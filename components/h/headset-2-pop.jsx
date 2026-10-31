import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j58fo5boa.css';
import '../../css/c/cv4dhqizq.css';
import '../../css/a/ac3zh4bfh.css';
import '../../css/u/uielh4ntr.css';
import '../../css/t/tksfsfojs.css';
import '../../css/a/ali4bpbad.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j58fo5boa"/><path class="cv4dhqizq"/><path class="ac3zh4bfh"/><path class="uielh4ntr"/><path class="tksfsfojs"/><path class="ali4bpbad"/></g>`,
		"fallback": "streamline-kameleon-color:headset-2-pop",
	});
}

export default Component;
