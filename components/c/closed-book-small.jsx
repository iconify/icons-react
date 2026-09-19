import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixkerdb_u.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixkerdb_u"/>`,
		"fallback": "dinkie-icons:closed-book-small",
	});
}

export default Component;
