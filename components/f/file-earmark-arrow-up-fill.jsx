import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dglssse0q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dglssse0q"/>`,
		"fallback": "bi:file-earmark-arrow-up-fill",
	});
}

export default Component;
