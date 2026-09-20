import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-n6sx-7m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-n6sx-7m"/>`,
		"fallback": "octicon:file-directory-fill-16",
	});
}

export default Component;
