import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysna8hi8k.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysna8hi8k"/>`,
		"fallback": "octicon:file-directory",
	});
}

export default Component;
