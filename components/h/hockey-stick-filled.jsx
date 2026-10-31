import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g_5xmacci.css';
import '../../css/m/merkfgbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g_5xmacci"/><path class="merkfgbvu"/></g>`,
		"fallback": "lucide-extended:hockey-stick-filled",
	});
}

export default Component;
