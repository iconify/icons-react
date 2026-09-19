import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uoqbtsb9u.css';
import '../../css/v/v034bsbbo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uoqbtsb9u"/><path class="v034bsbbo"/></g>`,
		"fallback": "heroicons-solid:chevron-double-right",
	});
}

export default Component;
