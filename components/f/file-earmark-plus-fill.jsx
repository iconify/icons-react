import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9whbacvt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9whbacvt"/>`,
		"fallback": "bi:file-earmark-plus-fill",
	});
}

export default Component;
