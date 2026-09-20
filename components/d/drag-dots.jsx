import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb0oq1bvr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb0oq1bvr"/>`,
		"fallback": "nimbus:drag-dots",
	});
}

export default Component;
