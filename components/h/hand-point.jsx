import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/br03-zbvs.css';
import '../../css/q/q5zpbgbqj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="br03-zbvs"/><path class="q5zpbgbqj"/></g>`,
		"fallback": "pepicons:hand-point",
	});
}

export default Component;
