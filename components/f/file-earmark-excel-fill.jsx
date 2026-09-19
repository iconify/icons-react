import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvk8v6b3l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvk8v6b3l"/>`,
		"fallback": "bi:file-earmark-excel-fill",
	});
}

export default Component;
