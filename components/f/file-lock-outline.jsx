import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i-cv4zbvw.css';
import '../../css/n/navyv0brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i-cv4zbvw"/><path class="navyv0brf"/></g>`,
		"fallback": "solar:file-lock-outline",
	});
}

export default Component;
