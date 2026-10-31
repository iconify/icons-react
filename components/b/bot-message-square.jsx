import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ofj54sh_v.css';
import '../../css/f/flcymhbrn.css';
import '../../css/o/oxvjs6b7m.css';
import '../../css/p/p1lss6bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ofj54sh_v wm-shadow"/><path class="flcymhbrn wm-shadow"/><path class="oxvjs6b7m"/><path class="p1lss6bst"/></g>`,
		"fallback": "withicons-brutal:bot-message-square",
	});
}

export default Component;
