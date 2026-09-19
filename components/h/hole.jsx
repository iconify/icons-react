import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqed8dtwx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqed8dtwx"/>`,
		"fallback": "fluent-emoji-high-contrast:hole",
	});
}

export default Component;
