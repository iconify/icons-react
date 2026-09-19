import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar8np1bie.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar8np1bie"/>`,
		"fallback": "bi:fullscreen",
	});
}

export default Component;
