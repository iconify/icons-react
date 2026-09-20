import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/k/kacv-xbnn.css';
import '../../css/y/y6s4gc8yt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="kacv-xbnn"/><path class="y6s4gc8yt"/></g>`,
		"fallback": "tdesign:dissatisfaction",
	});
}

export default Component;
