import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1vjxgbrn.css';
import '../../css/j/j2qx5-bth.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1vjxgbrn"/><path class="j2qx5-bth"/>`,
		"fallback": "ep:alarm-clock",
	});
}

export default Component;
