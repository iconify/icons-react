import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emqcwgb4t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emqcwgb4t"/>`,
		"fallback": "streamline:crown-remix",
	});
}

export default Component;
