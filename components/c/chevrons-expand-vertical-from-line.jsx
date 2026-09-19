import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xldjoowuq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xldjoowuq"/>`,
		"fallback": "gravity-ui:chevrons-expand-vertical-from-line",
	});
}

export default Component;
