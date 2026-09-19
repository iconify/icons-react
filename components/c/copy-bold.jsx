import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0phu2bbs.css';
import '../../css/t/tz5aj022z.css';
import '../../css/g/gchw9w8-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s0phu2bbs"><path class="tz5aj022z"/><path class="gchw9w8-h"/></g>`,
		"fallback": "iconamoon:copy-bold",
	});
}

export default Component;
