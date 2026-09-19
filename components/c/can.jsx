import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pm4fydb_g.css';
import '../../css/f/fqzsy9b5l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pm4fydb_g"/><path class="fqzsy9b5l"/></g>`,
		"fallback": "pepicons:can",
	});
}

export default Component;
