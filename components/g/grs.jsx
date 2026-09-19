import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j8n2xvt2n.css';
import '../../css/c/cvg6iubyh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="j8n2xvt2n"/><path class="cvg6iubyh"/></g>`,
		"fallback": "cryptocurrency-color:grs",
	});
}

export default Component;
