import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rd-15bc4w.css';
import '../../css/n/ntzoix46g.css';
import '../../css/o/os1_hxbhc.css';
import '../../css/h/hmyc3wbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rd-15bc4w"/><path class="ntzoix46g"/><path class="os1_hxbhc"/><path class="hmyc3wbam"/></g>`,
		"fallback": "withicons-bauhaus:helicopter",
	});
}

export default Component;
