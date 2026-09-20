import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbu26itox.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbu26itox"/>`,
		"fallback": "octicon:file-directory-16",
	});
}

export default Component;
