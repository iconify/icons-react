import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3rq8j5si.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3rq8j5si"/>`,
		"fallback": "octicon:cloud-download",
	});
}

export default Component;
