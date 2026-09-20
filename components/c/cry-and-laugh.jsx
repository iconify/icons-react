import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/f/f7l2hf3-u.css';
import '../../css/k/kacv-xbnn.css';
import '../../css/c/cyyzivj-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="f7l2hf3-u"/><path class="kacv-xbnn"/><path class="cyyzivj-d"/></g>`,
		"fallback": "tdesign:cry-and-laugh",
	});
}

export default Component;
