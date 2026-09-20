import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9nn-b3_g.css';
import '../../css/p/p6k-85b8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9nn-b3_g"/><path class="p6k-85b8h"/>`,
		"fallback": "octicon:file-check-16",
	});
}

export default Component;
