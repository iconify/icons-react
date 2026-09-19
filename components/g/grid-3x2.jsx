import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcebpw6vt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcebpw6vt"/>`,
		"fallback": "bi:grid-3x2",
	});
}

export default Component;
