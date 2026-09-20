import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srlzd6bji.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srlzd6bji"/>`,
		"fallback": "roentgen:apartments-3-story",
	});
}

export default Component;
