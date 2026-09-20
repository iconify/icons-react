import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uphm3xb5r.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uphm3xb5r"/>`,
		"fallback": "octicon:file-submodule",
	});
}

export default Component;
