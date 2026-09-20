import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wq9id9bvf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wq9id9bvf"/>`,
		"fallback": "streamline-plump:balloon-remix",
	});
}

export default Component;
