import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulyr7qb5y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulyr7qb5y"/>`,
		"fallback": "codicon:arrow-right",
	});
}

export default Component;
