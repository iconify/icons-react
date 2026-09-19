import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fx00gabsi.css';
import '../../css/f/fwjj0kbiv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fx00gabsi"/><path class="fwjj0kbiv"/></g>`,
		"fallback": "healthicons:dry-eyes-outline",
	});
}

export default Component;
