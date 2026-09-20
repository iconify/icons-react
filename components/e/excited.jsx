import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/g/gqgo7nzta.css';
import '../../css/k/kacv-xbnn.css';
import '../../css/n/n9xy-6b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4zs08s-q"/><path class="gqgo7nzta"/><path class="kacv-xbnn"/><path class="n9xy-6b_n"/></g>`,
		"fallback": "tdesign:excited",
	});
}

export default Component;
