import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvsghrbxx.css';
import '../../css/h/hxj4a-h4s.css';
import '../../css/p/p_x9mhh4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvsghrbxx"/><path class="hxj4a-h4s"/><path class="p_x9mhh4k"/>`,
		"fallback": "gcp:filestore",
	});
}

export default Component;
