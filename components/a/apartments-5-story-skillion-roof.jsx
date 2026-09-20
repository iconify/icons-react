import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltq07achs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltq07achs"/>`,
		"fallback": "roentgen:apartments-5-story-skillion-roof",
	});
}

export default Component;
