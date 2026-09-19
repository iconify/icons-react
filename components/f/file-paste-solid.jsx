import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wm9scpbjq.css';
import '../../css/i/i30we8_-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wm9scpbjq"/><path class="i30we8_-h"/></g>`,
		"fallback": "flowbite:file-paste-solid",
	});
}

export default Component;
