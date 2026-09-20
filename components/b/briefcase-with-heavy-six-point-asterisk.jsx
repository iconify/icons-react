import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p3kj7i7gu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p3kj7i7gu"/>`,
		"fallback": "pinhead:briefcase-with-heavy-six-point-asterisk",
	});
}

export default Component;
