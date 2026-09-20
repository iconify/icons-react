import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzgd3efjz.css';
import '../../css/d/dt6ofng9y.css';
import '../../css/t/t-grb25sy.css';
import '../../css/w/wi0q7xork.css';
import '../../css/c/c8a8l-60g.css';

const viewBox = {"width":479.591,"height":522.94};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzgd3efjz"/><path class="dt6ofng9y"/><path class="t-grb25sy"/><path class="wi0q7xork"/><path class="c8a8l-60g"/>`,
		"fallback": "thesvg-color:converse",
	});
}

export default Component;
