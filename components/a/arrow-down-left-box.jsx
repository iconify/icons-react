import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em5qjuh7z.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em5qjuh7z"/>`,
		"fallback": "memory:arrow-down-left-box",
	});
}

export default Component;
