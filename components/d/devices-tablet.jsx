import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udtxlyb6t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="udtxlyb6t"/>`,
		"fallback": "streamline-block:devices-tablet",
	});
}

export default Component;
