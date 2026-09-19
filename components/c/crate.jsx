import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxz9n17ru.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxz9n17ru"/>`,
		"fallback": "at-icons:crate",
	});
}

export default Component;
