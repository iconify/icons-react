import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wna-7rw7t.css';
import '../../css/f/fkjaaab8a.css';
import '../../css/q/qr57uhq0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wna-7rw7t"/><path class="fkjaaab8a"/><path class="qr57uhq0q"/></g>`,
		"fallback": "andrsrxn:dron-box",
	});
}

export default Component;
