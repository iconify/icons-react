import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj6pdebvd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj6pdebvd"/>`,
		"fallback": "lsicon:file-movie-outline",
	});
}

export default Component;
