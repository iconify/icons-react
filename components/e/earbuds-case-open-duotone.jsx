import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3w1id59s.css';
import '../../css/a/a_vghkb7i.css';
import '../../css/j/jbvij7j8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n3w1id59s"/><path class="a_vghkb7i"/><path class="jbvij7j8q"/></g>`,
		"fallback": "reicon:earbuds-case-open-duotone",
	});
}

export default Component;
