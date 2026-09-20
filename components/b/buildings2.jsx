import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/i/ifroi7b3s.css';
import '../../css/l/llfe_abfd.css';
import '../../css/u/utsg_1-6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="ifroi7b3s"/><path class="llfe_abfd"/><path class="utsg_1-6m"/></g>`,
		"fallback": "reicon:buildings2",
	});
}

export default Component;
