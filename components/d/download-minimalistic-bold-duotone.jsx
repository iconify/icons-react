import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y6lx2lb9z.css';
import '../../css/a/a3ytcss7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="y6lx2lb9z"/><path class="a3ytcss7a"/></g>`,
		"fallback": "solar:download-minimalistic-bold-duotone",
	});
}

export default Component;
