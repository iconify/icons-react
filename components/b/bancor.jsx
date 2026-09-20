import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zev6fxbep.css';
import '../../css/p/pj_m2ybgk.css';
import '../../css/v/v0uywbt6s.css';

const viewBox = {"width":269.57,"height":90.72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zev6fxbep"/><path class="pj_m2ybgk"/><path class="v0uywbt6s"/>`,
		"fallback": "thesvg-color:bancor",
	});
}

export default Component;
