import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnyx6qb8j.css';
import '../../css/u/u3nzwyrar.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnyx6qb8j"/><path class="u3nzwyrar"/>`,
		"fallback": "carbon:checkbox-checked-filled",
	});
}

export default Component;
