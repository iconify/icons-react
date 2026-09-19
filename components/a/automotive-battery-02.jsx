import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/owncrzbvw.css';
import '../../css/b/b3k667_bj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="owncrzbvw"/><path class="b3k667_bj"/></g>`,
		"fallback": "hugeicons:automotive-battery-02",
	});
}

export default Component;
