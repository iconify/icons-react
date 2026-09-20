import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g5luu37ms.css';
import '../../css/z/zzu4dac-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g5luu37ms"/><path class="zzu4dac-t"/></g>`,
		"fallback": "solar:cloud-bolt-outline",
	});
}

export default Component;
