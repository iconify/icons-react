import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tbz6pn9fb.css';
import '../../css/n/narjif-jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tbz6pn9fb"/><path class="narjif-jq"/></g>`,
		"fallback": "stash:chevron-double-left-light",
	});
}

export default Component;
