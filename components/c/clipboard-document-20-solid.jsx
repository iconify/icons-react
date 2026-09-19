import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i4pew3bub.css';
import '../../css/s/ssn6jvnil.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i4pew3bub"/><path class="ssn6jvnil"/></g>`,
		"fallback": "heroicons:clipboard-document-20-solid",
	});
}

export default Component;
