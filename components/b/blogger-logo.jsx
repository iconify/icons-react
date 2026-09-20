import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/od5ws9p1u.css';
import '../../css/z/zks01mb9q.css';
import '../../css/i/isdwbyblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="od5ws9p1u"/><path clip-rule="evenodd" class="zks01mb9q"/><path class="isdwbyblh"/></g>`,
		"fallback": "streamline-ultimate-color:blogger-logo",
	});
}

export default Component;
