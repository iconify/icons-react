import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uujxc3myq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uujxc3myq"/>`,
		"fallback": "streamline-sharp:hot-air-balloon-remix",
	});
}

export default Component;
