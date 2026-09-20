import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyewo0itl.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyewo0itl"/>`,
		"fallback": "memory:box-light-vertical-left-stipple-left",
	});
}

export default Component;
