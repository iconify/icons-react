import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d81wo4bpd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d81wo4bpd"/>`,
		"fallback": "bi:file-earmark-break-fill",
	});
}

export default Component;
