import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u32sjeb6e.css';
import '../../css/m/m7hd6_p8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u32sjeb6e"/><path class="m7hd6_p8a"/></g>`,
		"fallback": "heroicons:chevron-double-left-solid",
	});
}

export default Component;
