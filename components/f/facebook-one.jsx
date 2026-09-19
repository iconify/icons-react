import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s1hkfdcbz.css';
import '../../css/u/u5n_y8b6y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s1hkfdcbz"/><path class="u5n_y8b6y"/></g>`,
		"fallback": "icon-park:facebook-one",
	});
}

export default Component;
