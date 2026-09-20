import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oilb6wval.css';
import '../../css/j/jd3fx3b7u.css';
import '../../css/r/rydwybc0b.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><ellipse class="oilb6wval"/><path class="jd3fx3b7u"/></g><path class="rydwybc0b"/>`,
		"fallback": "map:cross-country-skiing",
	});
}

export default Component;
