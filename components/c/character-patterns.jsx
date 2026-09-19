import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dimqj2ncr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dimqj2ncr"/>`,
		"fallback": "carbon:character-patterns",
	});
}

export default Component;
