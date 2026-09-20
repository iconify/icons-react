import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/g/g0ogi8j0m.css';
import '../../css/r/rutf0mn2v.css';
import '../../css/z/zgreudcfh.css';
import '../../css/o/o8zdn7b1d.css';
import '../../css/m/m1-dq-43a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="g0ogi8j0m"/><path class="rutf0mn2v"/><path class="zgreudcfh"/><path class="o8zdn7b1d"/><path class="m1-dq-43a"/></g>`,
		"fallback": "streamline-sharp-color:critical-thinking-2",
	});
}

export default Component;
