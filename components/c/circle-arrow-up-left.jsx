import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g4zs08s-q.css';
import '../../css/k/kol5n_lrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g4zs08s-q"/><path class="kol5n_lrj"/></g>`,
		"fallback": "hugeicons:circle-arrow-up-left",
	});
}

export default Component;
