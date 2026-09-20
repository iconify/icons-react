import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j6pyshm9z.css';
import '../../css/w/wuo_8jb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j6pyshm9z"/><path class="wuo_8jb4x"/></g>`,
		"fallback": "reicon:gallery-wide",
	});
}

export default Component;
