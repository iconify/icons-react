import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/aupnd_1ki.css';
import '../../css/l/llxst4box.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="aupnd_1ki"/><path class="llxst4box"/></g>`,
		"fallback": "heroicons:chevron-double-up-solid",
	});
}

export default Component;
