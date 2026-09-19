import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-fum9tds.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-fum9tds"/>`,
		"fallback": "bi:collection-fill",
	});
}

export default Component;
