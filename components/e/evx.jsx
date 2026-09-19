import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n9yk9vboc.css';
import '../../css/l/luekbq2pr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="n9yk9vboc"/><path class="luekbq2pr"/></g>`,
		"fallback": "cryptocurrency-color:evx",
	});
}

export default Component;
