import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7k5bl4gp.css';
import '../../css/n/nku5kw5rq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7k5bl4gp"/><path class="nku5kw5rq"/></g>`,
		"fallback": "tdesign:ai-edit",
	});
}

export default Component;
