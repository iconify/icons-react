import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7wnnka3n.css';
import '../../css/u/utdqomf6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u7wnnka3n"/><path class="utdqomf6m"/></g>`,
		"fallback": "andrsrxn:battery",
	});
}

export default Component;
