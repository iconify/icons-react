import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cy0x-nbkv.css';
import '../../css/t/tid1712ab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cy0x-nbkv"/><path class="tid1712ab"/></g>`,
		"fallback": "flowbite:file-clone-solid",
	});
}

export default Component;
