import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wub9asb0k.css';
import '../../css/s/sgi1483fh.css';
import '../../css/v/vxtaxskvy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wub9asb0k"/><path class="sgi1483fh"/><path class="vxtaxskvy"/>`,
		"fallback": "energy-icons:feed-in-20",
	});
}

export default Component;
