import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tzg6v5btu.css';
import '../../css/b/b2zbrybhm.css';
import '../../css/n/n5intik2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tzg6v5btu"/><path class="b2zbrybhm"/><path class="n5intik2d"/></g>`,
		"fallback": "hugeicons:adventure",
	});
}

export default Component;
