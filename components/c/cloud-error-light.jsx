import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/f3xl7f2bt.css';
import '../../css/a/a2jwblbfm.css';
import '../../css/j/joeryvb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="f3xl7f2bt"/><path class="a2jwblbfm"/><path class="joeryvb2t"/></g>`,
		"fallback": "iconamoon:cloud-error-light",
	});
}

export default Component;
