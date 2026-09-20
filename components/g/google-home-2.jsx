import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/t/tbxf0xifz.css';
import '../../css/x/x4sh5ybyf.css';
import '../../css/b/bd_jjxd9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="tbxf0xifz"/><path class="x4sh5ybyf"/><path class="bd_jjxd9z"/></g>`,
		"fallback": "streamline-ultimate:google-home-2",
	});
}

export default Component;
