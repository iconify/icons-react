import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wcybux_3z.css';
import '../../css/a/abcwoxbsm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wcybux_3z"/><path class="abcwoxbsm"/></g>`,
		"fallback": "pepicons-pencil:down-left",
	});
}

export default Component;
