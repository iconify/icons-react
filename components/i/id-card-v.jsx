import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bwpzy-b4l.css';
import '../../css/d/db32suz7a.css';
import '../../css/a/a6_cycxia.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="bwpzy-b4l"/><path class="db32suz7a"/><path class="a6_cycxia"/></g>`,
		"fallback": "icon-park-solid:id-card-v",
	});
}

export default Component;
