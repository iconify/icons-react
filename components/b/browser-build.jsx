import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-zk5znxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-zk5znxj"/>`,
		"fallback": "streamline-sharp:browser-build",
	});
}

export default Component;
