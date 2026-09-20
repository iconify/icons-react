import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p5gclg75z.css';
import '../../css/y/yktl04b-s.css';
import '../../css/f/fyzbhiu-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p5gclg75z"/><path class="yktl04b-s"/><path class="fyzbhiu-x"/></g>`,
		"fallback": "tdesign:city-14",
	});
}

export default Component;
