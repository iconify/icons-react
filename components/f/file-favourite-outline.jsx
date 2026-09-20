import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z3agusxzc.css';
import '../../css/i/i2sp_ob9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z3agusxzc"/><path class="i2sp_ob9p"/></g>`,
		"fallback": "solar:file-favourite-outline",
	});
}

export default Component;
