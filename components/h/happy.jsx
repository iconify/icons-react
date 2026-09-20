import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/d/djucs8x_j.css';
import '../../css/k/kacv-xbnn.css';
import '../../css/e/ezv3vkgwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="djucs8x_j"/><path class="kacv-xbnn"/><path class="ezv3vkgwd"/></g>`,
		"fallback": "tdesign:happy",
	});
}

export default Component;
