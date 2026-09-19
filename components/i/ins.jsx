import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zst3r7bmm.css';
import '../../css/l/l5yicfbnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="zst3r7bmm"/><path class="l5yicfbnc"/></g>`,
		"fallback": "cryptocurrency:ins",
	});
}

export default Component;
