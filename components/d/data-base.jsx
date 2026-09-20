import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x372b7bwx.css';
import '../../css/y/yc5qdthlh.css';
import '../../css/a/aqro9ob8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x372b7bwx"/><path class="yc5qdthlh"/><path class="aqro9ob8j"/></g>`,
		"fallback": "tdesign:data-base",
	});
}

export default Component;
