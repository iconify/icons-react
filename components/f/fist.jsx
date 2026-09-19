import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orbt69i5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orbt69i5z"/>`,
		"fallback": "icon-park:fist",
	});
}

export default Component;
