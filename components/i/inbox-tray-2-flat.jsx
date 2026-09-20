import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s52cs-5ci.css';
import '../../css/g/g2a3teg6w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s52cs-5ci"/><path class="g2a3teg6w"/></g>`,
		"fallback": "streamline-color:inbox-tray-2-flat",
	});
}

export default Component;
