import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9-czvb6o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9-czvb6o"/>`,
		"fallback": "bi:filetype-m4p",
	});
}

export default Component;
