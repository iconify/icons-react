import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i9nr7ibyg.css';
import '../../css/a/ar_oz7byj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i9nr7ibyg"/><path class="ar_oz7byj"/></g>`,
		"fallback": "lineicons:file-pencil",
	});
}

export default Component;
