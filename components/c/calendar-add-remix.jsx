import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykt03jbyh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ykt03jbyh"/>`,
		"fallback": "streamline-plump:calendar-add-remix",
	});
}

export default Component;
