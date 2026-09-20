import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/utgs_bbxu.css';
import '../../css/d/dm68vsz5k.css';
import '../../css/l/l62qqqg8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="utgs_bbxu"/><path class="dm68vsz5k"/><path class="l62qqqg8q"/></g>`,
		"fallback": "reicon:home-trend-up",
	});
}

export default Component;
