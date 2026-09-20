import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhzi09bqg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhzi09bqg"/>`,
		"fallback": "roentgen:apartments-5-story",
	});
}

export default Component;
