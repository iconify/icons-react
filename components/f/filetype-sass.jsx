import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy5yt7bte.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy5yt7bte"/>`,
		"fallback": "bi:filetype-sass",
	});
}

export default Component;
