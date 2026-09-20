import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ox4mohbjf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ox4mohbjf"/>`,
		"fallback": "octicon:file-zip-16",
	});
}

export default Component;
