import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdaru6bad.css';
import '../../css/u/usr-w2uha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdaru6bad"/><path class="usr-w2uha"/></g>`,
		"fallback": "andrsrxn:box-return",
	});
}

export default Component;
