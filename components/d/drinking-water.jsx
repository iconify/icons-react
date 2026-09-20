import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugtfc0auw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugtfc0auw"/>`,
		"fallback": "roentgen:drinking-water",
	});
}

export default Component;
