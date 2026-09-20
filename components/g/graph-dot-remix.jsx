import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwsj0l8xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gwsj0l8xf"/>`,
		"fallback": "streamline-sharp:graph-dot-remix",
	});
}

export default Component;
