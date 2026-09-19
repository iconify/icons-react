import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaczkol8s.css';
import '../../css/k/k2yt7cn9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaczkol8s"/><path class="k2yt7cn9j"/>`,
		"fallback": "eos-icons:content-modified",
	});
}

export default Component;
