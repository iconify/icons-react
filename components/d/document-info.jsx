import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abg_9_bhy.css';
import '../../css/j/j6q_paczc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abg_9_bhy"/><path clip-rule="evenodd" class="j6q_paczc"/>`,
		"fallback": "ix:document-info",
	});
}

export default Component;
