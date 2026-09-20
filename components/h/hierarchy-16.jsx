import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm0fz11zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm0fz11zk"/>`,
		"fallback": "streamline-sharp:hierarchy-16",
	});
}

export default Component;
