import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydn3x3baz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydn3x3baz"/>`,
		"fallback": "mdi:drag-vertical",
	});
}

export default Component;
