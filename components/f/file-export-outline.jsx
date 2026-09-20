import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cafx1-b8l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cafx1-b8l"/>`,
		"fallback": "lsicon:file-export-outline",
	});
}

export default Component;
