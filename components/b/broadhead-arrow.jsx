import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2tuwi5tc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2tuwi5tc"/>`,
		"fallback": "game-icons:broadhead-arrow",
	});
}

export default Component;
