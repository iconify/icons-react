import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctugluwau.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctugluwau"/>`,
		"fallback": "icon-park-outline:book-open",
	});
}

export default Component;
