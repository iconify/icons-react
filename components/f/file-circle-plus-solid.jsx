import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/ht4t1_bhx.css';
import '../../css/i/iijl79btq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ht4t1_bhx"/><path class="iijl79btq"/></g>`,
		"fallback": "flowbite:file-circle-plus-solid",
	});
}

export default Component;
