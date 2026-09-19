import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxa7t1amh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxa7t1amh"/>`,
		"fallback": "codicon:download",
	});
}

export default Component;
