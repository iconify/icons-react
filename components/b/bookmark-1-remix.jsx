import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uemcgcccl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uemcgcccl"/>`,
		"fallback": "streamline-plump:bookmark-1-remix",
	});
}

export default Component;
