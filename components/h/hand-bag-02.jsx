import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hi9znkb4m.css';
import '../../css/c/cqf00f36x.css';
import '../../css/s/se4ujwtml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hi9znkb4m"/><path class="cqf00f36x"/><path class="se4ujwtml"/></g>`,
		"fallback": "hugeicons:hand-bag-02",
	});
}

export default Component;
