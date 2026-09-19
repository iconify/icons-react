import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p9mxaxkea.css';
import '../../css/j/j8pz7o4nx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="p9mxaxkea"/><path class="j8pz7o4nx"/></g>`,
		"fallback": "cryptocurrency-color:bay",
	});
}

export default Component;
