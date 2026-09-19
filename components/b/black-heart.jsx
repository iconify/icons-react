import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imz_-g2vu.css';
import '../../css/o/o8e_gr1ea.css';
import '../../css/k/k2kesjviu.css';
import '../../css/y/yg1bsebzz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="imz_-g2vu"/><path class="o8e_gr1ea"/><path class="k2kesjviu"/><ellipse transform="rotate(30 23.477 12.594)" class="yg1bsebzz"/></g>`,
		"fallback": "fluent-emoji-flat:black-heart",
	});
}

export default Component;
