import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yte3omhmn.css';
import '../../css/b/bmw9obc8p.css';
import '../../css/t/txtf8-bqd.css';
import '../../css/g/gkbqjpb8s.css';
import '../../css/g/gj-fope3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yte3omhmn"/><path class="bmw9obc8p"/><path class="txtf8-bqd"/><path class="gkbqjpb8s"/><path class="gj-fope3u"/></g>`,
		"fallback": "lets-icons:img-rol-duotone-line",
	});
}

export default Component;
