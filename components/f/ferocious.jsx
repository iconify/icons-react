import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/m/m_9__1bot.css';
import '../../css/k/kacv-xbnn.css';
import '../../css/h/hjf5h9ven.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="m_9__1bot"/><path class="kacv-xbnn"/><path class="hjf5h9ven"/></g>`,
		"fallback": "tdesign:ferocious",
	});
}

export default Component;
