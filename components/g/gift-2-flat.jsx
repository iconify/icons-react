import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fezqjvb_n.css';
import '../../css/j/jgjb6qb6r.css';
import '../../css/r/rsuw5wndk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fezqjvb_n"/><path class="jgjb6qb6r"/><path class="rsuw5wndk"/></g>`,
		"fallback": "streamline-sharp-color:gift-2-flat",
	});
}

export default Component;
