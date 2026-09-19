import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oil8jkbok.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oil8jkbok"/>`,
		"fallback": "whh:circleseven",
	});
}

export default Component;
